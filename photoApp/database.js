import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const getAlbumsForUser = async (userId) => {
  const { Items } = await docClient.send(
    new QueryCommand({
      TableName: "user-albums",
      KeyConditionExpression: "PK = :p",
      ExpressionAttributeValues: {
        ":p": userId,
      },
    })
  );

  return Items.map((albums) => albums.id);
};
