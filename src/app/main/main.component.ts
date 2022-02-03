import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  user = 'Nyan';
  age = 99;

  constructor() {}

  ngOnInit(): void {}

  userclick = () => {
    console.log('clicked');
  };
}
