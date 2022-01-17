/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from './services/events.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  loadingPage = false;

  constructor(
    private router: Router,
    private events: Events
  ){
    console.log('appcomponents: constructor');
    this.initializeApp();
  }

  ngOnInit(): void {
    console.log('appcomponents: ngOnInit');
    this.loadingPage=false;
  }

  initializeApp(){

    this.events.subscribe('lang:changed', (data: any) => {
      this.router.navigate([data.lang, 'home']);
      this.loadingPage = true;
      setTimeout(function(){
        location.reload();
      },500);
    });


  }

}
