import { Response, ResponseOptions } from "@angular/http";

export class LoginResponse extends Response {
    constructor(_code: number, _message: string, _defaultOptions?: ResponseOptions) {
        super(_defaultOptions);
    }
}