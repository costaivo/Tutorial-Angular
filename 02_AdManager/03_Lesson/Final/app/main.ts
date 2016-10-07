// import bootstrap 
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// import our root module
import {AppModule} from './app.module';

//bootstrap the component
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);