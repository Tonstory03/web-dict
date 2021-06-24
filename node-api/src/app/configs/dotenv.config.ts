import * as dotenv from 'dotenv';
const includeENVs = ['test', 'staging', 'prod'];
const _env = process.env.NODE_ENV || 'development';
const getEnv = (_env = '') => {
  if (['test', 'testing', 'qa'].includes(_env.toLowerCase())) {
    return '.test';
  } else if (['prod', 'product', 'production'].includes(_env.toLowerCase())) {
    return '.production';
  }
  return '';
};
dotenv.config({ path: `.env${getEnv(_env)}` });
