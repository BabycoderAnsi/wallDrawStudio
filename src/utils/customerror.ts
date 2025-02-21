import moment from "moment";

import {
  CustomErrorResponse,
  CustomErrorResponseType,
} from "../types";

class CustomError extends Error {
  private httpsStatusCode: number;
  private type: CustomErrorResponseType;
  private requestId: string;
  private requestEpoch: number;
  private reason: any;

  constructor(
    httpsStatusCode: number,
    message: string,
    type: CustomErrorResponseType,
    requestId: string,
    requestEpoch: number,
    reason?: any
  ) {
    super(message);
    this.name = this.constructor.name;
    this.httpsStatusCode = httpsStatusCode;
    this.type = type;
    this.requestId = requestId;
    this.requestEpoch = requestEpoch;
    this.reason = reason;
  }

  get HttpsStatusCode(){
    return this.httpsStatusCode;
  }

  get JSON(): CustomErrorResponse {
    return {
      requestId: this.requestId,
      success: false,
      requestEpoch: this.requestEpoch,
      responseEpoch: moment().valueOf(),
      UTCOffset: moment().format('Z'),

      data: {
        detail: this.message,
        type: this.type,
        ...(this.reason && { reason: this.reason }),
        ...(process.env.NODE_ENV !== "production" && {
            stack: this.stack,
        }),
      },
    };
  }
}

export { CustomError };
