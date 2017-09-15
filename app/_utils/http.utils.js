"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// import { Md5 } from "ts-md5/dist/md5";
require("rxjs/add/operator/map");
//import { BaseResponse } from "../models/BaseResponse";
var HttpUtils = /** @class */ (function () {
    function HttpUtils() {
    }
    HttpUtils.prototype.headers = function (systemName, environmentName, billingId, isBasic) {
        var headersParams = { "Content-Type": "Access-Control-Allow-Origin" };
        var headers = new http_1.Headers(headersParams);
        if (!isBasic) {
            headers.append("Authorization", "bearer " + localStorage["token"]);
        }
        else {
            headers.append("Authorization", "Basic b2xlLXVzZXItdHJ1c3RlZC1jbGllbnQ6b2xlLXNlY3JldA=="); //TODO : ambiente: HML (DEV/HML/PRD)
        }
        //informacoes obrigatórias
        headers.append("systemName", systemName);
        headers.append("environmentName", environmentName);
        //headers.append("productName", "appOrbitallCard");
        //informacoes complementares
        //headers.append("billingId", billingId);
        //headers.append("version", "5.1");
        return new http_1.RequestOptions({ headers: headers });
    };
    HttpUtils = __decorate([
        core_1.Injectable()
    ], HttpUtils);
    return HttpUtils;
}());
exports.HttpUtils = HttpUtils;
//# sourceMappingURL=http.utils.js.map