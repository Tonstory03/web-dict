const httpResponse = (message: string, statusCode: string, status: boolean, optional: any = {}) => {
  return {
    message,
    statusCode,
    status,
    ...optional,
  };
};

const httpSuccess = (message = 'Success', optional: any = {}) => {
  return httpResponse(message, '20000', true, optional);
};

const httpBadRequest = (message = 'BadRequest', optional: any = {}) => {
  return httpResponse(message, '40000', false, optional);
};

const httpUnauthen = (message = 'Unauthenticated', optional: any = {}) => {
  return httpResponse(message, '40100', false, optional);
};

const httpUnauthor = (message = 'Unauthorized', optional: any = {}) => {
  return httpResponse(message, '40300', false, optional);
};

const httpNotfound = (message = 'Not Found', optional: any = {}) => {
  return httpResponse(message, '40400', false, optional);
};

const httpMethodNotAllow = (message = 'Method Not Allow', optional: any = {}) => {
  return httpResponse(message, '40500', false, optional);
};

const httpError = (message = 'Internal Server Error', optional: any = {}) => {
  return httpResponse(message, '50000', false, optional);
};

export { httpSuccess, httpBadRequest, httpError, httpMethodNotAllow, httpNotfound, httpUnauthen, httpUnauthor };
