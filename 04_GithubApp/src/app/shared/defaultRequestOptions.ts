import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

    private superHeaders: Headers;

    get headers() {
        console.log('get headers called');
        // Set the default 'Content-Type' header
        this.superHeaders.set('Content-Type', 'application/json');

        const token = localStorage.getItem('authToken');
        if (token) {
            this.superHeaders.set('Authorization', `Bearer ${token}`);
        } else {
            this.superHeaders.delete('Authorization');
        }
        return this.superHeaders;
    }

    set headers(headers: Headers) {
        this.superHeaders = headers;
    }

    constructor() {
        console.log('DefaultRequestOptions created');
        super();
    }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };