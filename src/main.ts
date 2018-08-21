import { enableProdMode,ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//使用Angular的platformBrowserDynamic().bootstrapModule对根模块AppModule进行引导
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
  // .then(()=>{
  // document.querySelector('.preloader').className += ' preloader-hidden-add preloader-hidden-add-active';
  // })



