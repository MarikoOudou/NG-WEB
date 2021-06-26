import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // module

/* if (environment.production) {
  enableProdMode();
} */
enableProdMode();

// platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(AppModule, {
  preserveWhitespaces: true
})
.catch(err => console.log(err));
