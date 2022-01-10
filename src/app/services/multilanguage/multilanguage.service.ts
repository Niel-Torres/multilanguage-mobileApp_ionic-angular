import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class MultilanguageService {

  private currentLanguage = 'en'; //lang default
  private availableLanguages = [
    {
      lang: 'en'
    },
    {
      lang: 'fr'
    }
  ];

  constructor(
    private globalService: GlobalService
  ) {
    this.updateFromLocalStorage();
    this.updateFromUrl();
  }

  getCurrentLang(){
    return this.currentLanguage;
  }

  setCurrentLang(lang: string){
    console.log('MultilanguageService: currentLanguage updated in localStorage');
    localStorage.setItem('lang', lang);
    this.currentLanguage = lang;
  }

  updateFromLocalStorage(){
     const langFromLocalStorage = localStorage.getItem('lang');
     if(langFromLocalStorage)
     {
      this.currentLanguage = langFromLocalStorage;
     }
  }

  updateFromUrl(){
    //const langFromUrl = this.router.url.split('/')[1];
    const langFromUrl = location.pathname.split('/')[1];
    const found = this.availableLanguages.find( element => element.lang === langFromUrl);
    if(found){
      console.log('MultilanguageService: New lang detected -> '+found.lang);
      this.setCurrentLang(found.lang);
    }
  }

  languageChanged(lang: string){
    this.setCurrentLang(lang);
    this.publishEvent(lang);
  }

  publishEvent(language: string){
    this.globalService.publishSomeData({
      lang: language
    });
  }

}
