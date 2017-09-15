import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { HttpUtils } from "../_utils/index";
import { LoginResponse } from "../_models/index";
import 'rxjs/add/operator/map'

@Injectable()
export class OrbitallAuthenticationService {
    public token: string;

    constructor(private http: Http, private httpUtils: HttpUtils) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        // https://107.154.120.58/token
        // https://api.orbitallcartoes.com.br/token
        const URL: string = "https://107.154.120.58/token";
        const BODY: string = "grant_type=password&username=" + username + /* "&password=" + password; */ "&password=e10adc3949ba59abbe56e057f20f883e";
        const HEADERS: RequestOptions = this.httpUtils.headers("ole", "hml", "07049009717", true);

        return this.http
            .post(URL, BODY, HEADERS)
            //.get("https://echo.getpostman.com/status/200", HEADERS)
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return null (false) to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}