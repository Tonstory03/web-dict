export abstract class CustomError {
  protected constructor(readonly message: string, readonly statusCode: string, readonly httpStatus: number) {}
}
