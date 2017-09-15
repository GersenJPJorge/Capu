import { Response, Headers, RequestOptions } from "@angular/http";
import { ResponseOptions } from "@angular/http";

export class BaseResponse extends Response {
    constructor(public descricaoRetorno?: string, public codigoRetorno?: number, defaultOptions?: ResponseOptions) {
        super(defaultOptions);
    }
}

export class TokenBackEnd {
    constructor(public OAuth2AccessToken?: OAuth2AccessToken) { }
}

export class OAuth2AccessToken {
    constructor(
        public access_token?: string,
        token_type?: string,
        refresh_token?: string,
        expires_in?: string,
        scope?: string
    ) { }
}

// Here you are, Login will be used after send a request via POST as a response!
export class Login extends BaseResponse {
    constructor(public tokenBackEnd?: TokenBackEnd, public descricaoRetorno?: string, public codigoRetorno?: number) {
        super();
    }
}

