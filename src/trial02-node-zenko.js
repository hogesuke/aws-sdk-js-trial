// 参考: https://www.zenko.io/blog/first-things-first-getting-started-scality-s3-server/
const AWS = require('aws-sdk');

const ENDPOINT = 'http://127.0.0.1:8000';

AWS.config.loadFromPath('./src/credentials.json');

const s3 = new AWS.S3({
  endpoint: ENDPOINT,
  s3ForcePathStyle: true
});

const params1 = {
  Bucket: 'hogesuke',
  Key: 'text1.txt',
  Body: 'Hello!',
  ContentType: 'text/plain'
};

const params2 = {
  Bucket: 'hogesuke',
  Key: 'text2.txt',
  Body: 'World!',
  ContentType: 'text/plain'
};

s3.upload(params1, (err, result) => {
  console.log(err, result);
  s3.upload(params2, (err, result) => {
    console.log(err, result);
  })
});