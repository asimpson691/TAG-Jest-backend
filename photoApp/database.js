const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const {
  QueryCommand,
  DynamoDBDocumentClient,
} = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

const getAlbumsForUser = async (userId) => {
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

module.exports = {
  getAlbumsForUser,
};
