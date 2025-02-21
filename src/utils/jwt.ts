import * as jsonwebtoken from 'jsonwebtoken';
import { JWT_TOKEN_TYPES } from '../global/constants';
import { AccessTokenJWTPayload, CaptchaJWTPayload, DeviceTOTPSetupJWTPayload, JWTOptions, PreLoginJWTPayload } from 'types';


class JWT{
    public static _instance: JWT;
    public readonly JWTISSUER = "Wall Draw Studio";
    private jwtKeys = {};

    constructor(options: JWTOptions) {
        if (!JWT._instance) {
            this.jwtKeys = {
              [JWT_TOKEN_TYPES.ACCESS_TOKEN]: options.ACCESS_TOKEN_JWT_SECRET_KEY,
              [JWT_TOKEN_TYPES.PRE_LOGIN_TOKEN]: options.PRE_LOGIN_TOKEN_JWT_SECRET_KEY,
              [JWT_TOKEN_TYPES.CAPTCHA_TOKEN]: options.CAPTCHA_TOKEN_JWT_SECRET_KEY,
              [JWT_TOKEN_TYPES.DEVICE_TOTP_SETUP_TOKEN]: options.DEVICE_TOTP_SETUP_TOKEN_JWT_SECRET_KEY,
            };
      
            JWT._instance = this;
        }

        return JWT._instance;
    }

    static getInstance(options: JWTOptions) {
        return new JWT(options);
    }

    verifyToken(token: string, type: JWT_TOKEN_TYPES) {
        return jsonwebtoken.verify(token, this.jwtKeys[type]);
    }

    generateToken(
        payload: AccessTokenJWTPayload | PreLoginJWTPayload | CaptchaJWTPayload | DeviceTOTPSetupJWTPayload,
        type: JWT_TOKEN_TYPES,
        expiry: number,
      ) {
        return jsonwebtoken.sign(payload, this.jwtKeys[type], {
          expiresIn: expiry,
          issuer: this.JWTISSUER,
        });
      }
}

export { JWT };
