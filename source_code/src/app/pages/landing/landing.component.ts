import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public isActive: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public isLinkActive(): void {
    this.isActive = true
  }

}
