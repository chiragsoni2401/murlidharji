import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navlinks: { link: string; active: string; txt: string }[];

  images = [
    { path: 'https://source.unsplash.com/800x600/?nature' },
    { path: 'https://source.unsplash.com/800x600/?car' },
    { path: 'https://source.unsplash.com/800x600/?moto' },
    { path: 'https://source.unsplash.com/800x600/?fantasy' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
