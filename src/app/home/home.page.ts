import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home/home.service';
import { MultilanguageService } from '../services/multilanguage/multilanguage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  segmentModel = this.languageService.getCurrentLang();
  contentForDashboard = [];

  constructor(
    private homeService: HomeService,
    private languageService: MultilanguageService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.homeService.setContentForDashboard(this.languageService.getCurrentLang());
    this.contentForDashboard = this.homeService.getContentForDashboard();
  }

  changeLanguage(ev: any) {
    console.log('Language changed', ev);
    this.languageService.languageChanged(ev.detail.value);
  }



}
