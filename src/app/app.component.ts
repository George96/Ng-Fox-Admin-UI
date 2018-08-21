import { Component, ViewChild, TemplateRef, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title:string = 'ng-fox-admin';
  isCollapsed:boolean = false;
  isMobile:boolean = false;

  public toggle(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }
}