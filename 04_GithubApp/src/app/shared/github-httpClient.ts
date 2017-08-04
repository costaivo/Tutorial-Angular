// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';

// @Injectable()
// export class GitHttpClient {

//     constructor(private http: Http) { }

//     createAuthorizationHeader(headers: Headers) {
//         headers.append('Authorization', 'Basic ' +
//             btoa('username:password'));
//     }

//     // get(url) {
//     //     console.log('i am called as get');
//     //     let headers = new Headers();
//     //     this.createAuthorizationHeader(headers);
//     //     return this.http.get(url, {
//     //         headers: headers
//     //     });
//     // }

//     // post(url, data) {
//     //     console.log('i am called as post');
//     //     let headers = new Headers();
//     //     this.createAuthorizationHeader(headers);
//     //     return this.http.post(url, data, {
//     //         headers: headers
//     //     });
//     // }

//     get(url) {
//         console.log('i am called as get');
//         return this.http.get(url);
//     }
//     post(url, data) {
//         console.log('i am called as post');
//         return this.http.post(url, data);
//     }
// }
