export type AccessTokenJWTPayload = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PreLoginJWTPayload = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  country_code: string;
};

export type CaptchaJWTPayload = {
  captcha: string;
};

export type DeviceTOTPSetupJWTPayload = {
  id: string;
  device_secret: string;
};

export type JWTOptions = {
  ACCESS_TOKEN_JWT_SECRET_KEY: string;
  PRE_LOGIN_TOKEN_JWT_SECRET_KEY: string;
  DEVICE_TOTP_SETUP_TOKEN_JWT_SECRET_KEY: string;
  CAPTCHA_TOKEN_JWT_SECRET_KEY: string;
}
