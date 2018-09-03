// 参考: https://www.zenko.io/blog/first-things-first-getting-started-scality-s3-server/
const AWS = require('aws-sdk');

const ENDPOINT = 'http://127.0.0.1:8000';

AWS.config.loadFromPath('./src/credentials.json');

const s3 = new AWS.S3({
  endpoint: ENDPOINT,
  s3ForcePathStyle: true
});

s3.listBuckets({}, (err, data) => {
  if (err) {
    console.error(err, err.stack);
  } else {
    console.log(data);
  }
});
