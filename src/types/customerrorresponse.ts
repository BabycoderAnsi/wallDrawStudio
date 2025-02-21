export type CustomErrorResponseType =
  | "TOASTER"
  | "FIELD"
  | "MODAL"
  | "ACTION_REQUIRED";

export type CustomErrorResponseData = {
  detail: string;
  type: CustomErrorResponseType;
  resaon?: any;
  stack?: string;
};

export type CustomErrorResponse = {
  requestId: string;
  success: boolean;
  requestEpoch: number;
  responseEpoch: number;
  data: CustomErrorResponseData;
  UTCOffset: string;
};
