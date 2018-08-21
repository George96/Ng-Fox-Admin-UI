import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.less']
})

export class CoreComponent implements OnInit {
  title:string = 'ng-fox-admin';
  isCollapsed:boolean = false;
  isMobile:boolean = false;
  constructor() { }

  ngOnInit() { }

  public toggle(isCollapsed: boolean) {
    this.isCollapsed = isCollapsed;
  }
}