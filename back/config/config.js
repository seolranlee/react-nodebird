const dotenv = require('dotenv')

dotenv.config()

// dotenv를 쓰기 위해 config.json => config.js로 변환(json파일에는 dotenv를 못씀.)
module.exports = {
  "development": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "port": "3306",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": process.env.DB_PASSWORD,
    "database": "react-nodebird",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
