"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var BaseResponse = /** @class */ (function (_super) {
    __extends(BaseResponse, _super);
    function BaseResponse(descricaoRetorno, codigoRetorno, defaultOptions) {
        var _this = _super.call(this, defaultOptions) || this;
        _this.descricaoRetorno = descricaoRetorno;
        _this.codigoRetorno = codigoRetorno;
        return _this;
    }
    return BaseResponse;
}(http_1.Response));
exports.BaseResponse = BaseResponse;
var TokenBackEnd = /** @class */ (function () {
    function TokenBackEnd(OAuth2AccessToken) {
        this.OAuth2AccessToken = OAuth2AccessToken;
    }
    return TokenBackEnd;
}());
exports.TokenBackEnd = TokenBackEnd;
var OAuth2AccessToken = /** @class */ (function () {
    function OAuth2AccessToken(access_token, token_type, refresh_token, expires_in, scope) {
        this.access_token = access_token;
    }
    return OAuth2AccessToken;
}());
exports.OAuth2AccessToken = OAuth2AccessToken;
// Here you are, Login will be used after send a request via POST as a response!
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(tokenBackEnd, descricaoRetorno, codigoRetorno) {
        var _this = _super.call(this) || this;
        _this.tokenBackEnd = tokenBackEnd;
        _this.descricaoRetorno = descricaoRetorno;
        _this.codigoRetorno = codigoRetorno;
        return _this;
    }
    return Login;
}(BaseResponse));
exports.Login = Login;
//# sourceMappingURL=login.js.map