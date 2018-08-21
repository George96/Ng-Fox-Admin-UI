import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SharedModule } from './shared/shared.module'
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {  CoreComponent } from './core/core.component';
// import { LoginComponent } from './passport/login/login.component';
// import { PassportModule } from './passport/passport.module';
// import {  LoginComponent } from './passport/login/login.component';

// 加入国际化支持
registerLocaleData(zh);

export const ROUTES: Routes = [
  { path: '', component: CoreComponent },
  // { path:'login' ,component: LoginComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    // PassportModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    SharedModule
  ],
  declarations: [
    AppComponent,
    CoreComponent
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
