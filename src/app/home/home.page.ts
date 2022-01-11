import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';
import { MultilanguageService } from '../services/multilanguage/multilanguage.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  currentLang = this.languageService.getCurrentLang();
  segmentModel = this.currentLang;
  dataContentsHome: any = [];
  showDataContentsDashboard = false;

  constructor(
    private homeService: HomeService,
    private languageService: MultilanguageService
  ) {}

  ngOnInit(): void {
    this.getDataHome();
  }

  changeLanguage(ev: any) {
    console.log('Language changed', ev);
    this.languageService.languageChanged(ev.detail.value);
  }

  getDataHome(){
    console.log('HomePage: Try to connect to HomeService to get /api/home?language='+this.currentLang);
    this.homeService.doHttpGetRequest(this.currentLang)
    .then(
      (response) => {
        this.showDataContentsDashboard = true;
        this.dataContentsHome = response;
      },
      (err) => {
        console.log(err);
        //TODO: Mocks
      }
    );
  }
}
