// 参考: https://www.zenko.io/blog/first-things-first-getting-started-scality-s3-server/
import * as AWS from 'aws-sdk';

const ACCESS_KEY = 'accessKey1';     // zenkoの初期アクセスキー
const SECRET_KEY = 'verySecreyKey1'; // zenkoの初期シークレットキー
const ENDPOINT = 'http://127.0.0.1:8000';
const BUCKET = 'hogesuke';

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY
});

const s3 = new AWS.S3({
  endpoint: ENDPOINT,
  s3ForcePathStyle: true,
});

s3.listBuckets({}, (err, data) => {
  if (err) {
    console.error(err, err.stack);
  } else {
    console.log(data);
  }
});

