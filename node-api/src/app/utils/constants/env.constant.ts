interface IENVConstant {
  NODE_ENV: string;
  APP_HOST: string;
  APP_PORT: string;
}

export const ENV: IENVConstant = {
  NODE_ENV: process.env.NODE_ENV || '',
  APP_HOST: process.env.APP_HOST || '',
  APP_PORT: process.env.APP_PORT || '',
};
