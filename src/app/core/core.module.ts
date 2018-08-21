import { NgModule, SkipSelf,Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module'
import { HeaderFullScreenComponent } from './header/components/fullscreen.component';
import { HeaderUserComponent } from './header/components/user.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent,HeaderFullScreenComponent,HeaderUserComponent]
})
//使用@Optional将CoreModule构造成为可选，当第一次进入构造函数时正常加载，后续进入抛出异常
export class CoreModule {
  constructorpar(@Optional() @SkipSelf() parent:CoreModule){
    if(parent){
      throw new Error('模快已存在，不能再次加載');
    }
  }
}
