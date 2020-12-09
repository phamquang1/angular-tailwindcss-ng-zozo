import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  inputValue: string = 'my site';
  constructor() { }

  ngOnInit(): void {
  }

}
