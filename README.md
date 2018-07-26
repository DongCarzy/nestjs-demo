# nestjs-demo

## Description

初步demo

## download code
```bash
$ git clone https://github.com/DongCarzy/nestjs-demo.git
```
or
```bash
https://github.com/DongCarzy/nestjs-demo/archive/master.zip
```
## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 测试API
### 可能无效
```https
https://documenter.getpostman.com/view/1366049/RWMJr7Dm#intro
```
### 四组API
* 查询所有
```bash
curl --request GET --url http://localhost:3000/user
```
* 新增
```bash
curl --request POST \
  --url http://localhost:3000/user \
  --header 'Content-Type: application/json' \
  --data '{
	"id": 1,
	"no": "1",
	"name": "111"
}'
```
* 修改
```bash
curl --request PATCH \
  --url http://localhost:3000/user/1 \
  --header 'Content-Type: application/json' \
  --data '{
	"no": "11_no",
	"name": "11_name"
}'
```
* 查询单个
```bash
curl --request GET \
  --url http://localhost:3000/user/1
```
* 删除
```bash
curl --request DELETE \
  --url http://localhost:3000/user/1
```

