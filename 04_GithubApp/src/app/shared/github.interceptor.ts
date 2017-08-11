import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/observable';

import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpEvent
} from '@angular/common/http';

export class TimingInterceptor implements HttpInterceptor {
    constructor() {
        console.log('TimingInterceptor  constructor');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('TimingInterceptor  intercepted');
        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                console.log('Dummy log');
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
                }
            });
    }
}
