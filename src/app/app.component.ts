/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';
import { MenuService } from './services/menu/menu.service';
import { MultilanguageService } from './services/multilanguage/multilanguage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  loadingPage = false;

  constructor(
    private globalService: GlobalService,
    private router: Router,
    private menuService: MenuService,
    private languageService: MultilanguageService
  ){
    this.initializeApp();
  }

  ngOnInit(): void {
    this.menuService.setElementsMenu(this.languageService.getCurrentLang());
    this.loadingPage=false;
  }

  initializeApp(){
    this.globalService.getObservable().subscribe((data) => {
      this.router.navigate([data.lang, 'home']);
      this.loadingPage = true;
      setTimeout(function(){
        location.reload();
      },500);
    });
  }

}
