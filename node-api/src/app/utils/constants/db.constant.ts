interface IDBConstant {
  URI: string;
  USER: string;
  PASS: string;
  OPTIONS: object;
}

export const DB_CONST: IDBConstant = {
  URI: process.env.DB_URI || '',
  USER: process.env.DB_USER || '',
  PASS: process.env.DB_PASS || '',
  OPTIONS: {},
};
