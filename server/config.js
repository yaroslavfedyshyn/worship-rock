const dotenv = require('dotenv');

dotenv.config();

const DEFAULT_PORT = 3001;

const env = process.env.NODE_ENV;
const DB = process.env.DB;
const isDev = env === 'development';

const whiteListOriginsStr = process.env.WHITE_LIST_ORIGINS || '';
const whiteListOrigins = whiteListOriginsStr ? whiteListOriginsStr.split(',') : [];

module.exports = {
  DB,
  env,
  isDev,
  port: process.env.PORT || DEFAULT_PORT,
  whiteListOrigins,
};
