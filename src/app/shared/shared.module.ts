import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd'
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: []
})
export class SharedModule { }
