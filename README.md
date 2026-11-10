# Commands

## Start the HTTP Server

```
cd git
cd ourschool-friends
node app.js (Port 3000)
```
## Start the DB

```
cd downloads
cd dynamodb_local_latest
java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb\n
```
## DB command scheme

`aws dynamodb _____ --endpoint-url localhost:3000`

## Create Table

```
aws dynamodb create-table \
    --table-name Users \
    --attribute-definitions \
         AttributeName=email,AttributeType=S \
    --key-schema AttributeName=email,KeyType=HASH \
    --billing-mode PAY_PER_REQUEST \
    --endpoint-url http://localhost:8000 \
    --region eu-east-1
```