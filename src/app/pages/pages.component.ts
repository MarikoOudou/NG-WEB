import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent {

  profile:any;

  constructor() {
    this.profile =  JSON.parse(localStorage.getItem('user_profil'));
    console.log('user : ', this.profile)
  }
}
