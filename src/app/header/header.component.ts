import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuButtons: Array<any> = [
    {
      text: 'Characters',
      route: 'characters',
    },
    {
      text: 'Episode',
      route: 'episodes',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
