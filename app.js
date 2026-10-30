import express from 'express';
import path from 'node:path';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const app = express();
const port = 3000;
const db = DynamoDBDocumentClient.from(
  new DynamoDBClient({
    region: 'eu-east-1',
    endpoint: 'http://localhost:8000',
    credentials: {
      accessKeyId: 'fakeAccessKeyId',
      secretAccessKey: 'fakeSecretAccessKey'
    }
  })
);

app.use('/Images', express.static(path.resolve('Images')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve('HTML/login.html'));
});

app.post('/authenticate', (req, res) => {
  DynamoDBClient.get()
  res.send("unfinished")
});

app.get('/signup', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
