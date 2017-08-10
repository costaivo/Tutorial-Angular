import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TimingInterceptor } from './shared/github.interceptor';
import { GithubService } from './github/github.service';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
//import { GitHttpClient } from './shared/github-httpClient';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    // Include it under 'imports' in your application module
    // after BrowserModule.
   HttpClientModule,
    FormsModule,
    // HttpModule,
 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TimingInterceptor,
    multi: true,
  },
    // GitHttpClient,
    GithubService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor() {
    console.log('AppModule Constructor');
  }
}
