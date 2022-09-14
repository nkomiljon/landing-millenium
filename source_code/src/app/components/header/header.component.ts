import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public isOpen(): void {
      this.isActive =! this.isActive
  }

  public isClose(event: boolean): void {
    this.isActive = event;
  }

}
