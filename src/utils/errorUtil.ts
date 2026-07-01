
/**
 * Here we Extends the Error Class and Define our Custom Errors
 */


export class TimeOutError extends Error {
  constructor(message: string) {
    super(`TimeOut Error : ${message}`);
  }
}

export class ElementNotFoundError extends Error {
  constructor(message: string) {
    super(`ElementNotFound Error : ${message}`);
  }
}