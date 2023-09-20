
import HttpStatusCodes from '@src/constants/HttpStatusCodes';


export class AppError extends Error {
  public status: HttpStatusCodes;

  constructor(status: HttpStatusCodes, message: string) {
    super(message);
    this.status = status;
  }
}

export class RouteError extends AppError {
  constructor(message: string) {
    super(HttpStatusCodes.NOT_FOUND, message);
  }
}

export class ValidationError extends AppError {
  public errors: any[];

  constructor(status: HttpStatusCodes, message: string, errors: any[]) {
    super(status, message);
    this.errors = errors;
  }
}