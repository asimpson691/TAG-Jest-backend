const { PutObjectCommand, S3Client } = require("@aws-sdk/client-s3");

const s3Client = new S3Client();

const writePhotosToS3 = async (input, bucket, fileName) => {
  const command = new PutObjectCommand({
    Body: input,
    Bucket: bucket,
    Key: fileName,
  });

  await s3Client.send(command);

  return fileName;
};

module.exports = {
  writePhotosToS3,
};
