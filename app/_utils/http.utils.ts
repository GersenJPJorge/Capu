import { Injectable } from "@angular/core";
import { Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
// import { Md5 } from "ts-md5/dist/md5";
import "rxjs/add/operator/map";
//import { BaseResponse } from "../models/BaseResponse";

@Injectable()
export class HttpUtils {
    public headers(systemName: string, environmentName: string, billingId: string, isBasic: boolean): RequestOptions {
        let headersParams = { "Content-Type": "Access-Control-Allow-Origin" };
        let headers = new Headers(headersParams);

        if (!isBasic) {
            headers.append("Authorization", "bearer " + localStorage["token"]);
        } else {
            headers.append(
                "Authorization",
                "Basic b2xlLXVzZXItdHJ1c3RlZC1jbGllbnQ6b2xlLXNlY3JldA=="
            ); //TODO : ambiente: HML (DEV/HML/PRD)
        }

        //informacoes obrigatórias
        headers.append("systemName", systemName);
        headers.append("environmentName", environmentName);
        //headers.append("productName", "appOrbitallCard");

        //informacoes complementares
        //headers.append("billingId", billingId);
        //headers.append("version", "5.1");

        return new RequestOptions({ headers: headers });
    }
}