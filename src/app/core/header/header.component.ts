import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  
  @Input() isCollapsed: boolean;
  @Output() toggleEvent: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public toggleToCollapsed() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleEvent.emit(this.isCollapsed);
  }

}
