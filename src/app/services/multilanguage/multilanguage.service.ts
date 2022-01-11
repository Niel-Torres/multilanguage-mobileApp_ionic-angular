import { Injectable } from '@angular/core';
import { Events } from '../events.service';

@Injectable({
  providedIn: 'root'
})
export class MultilanguageService {

  private currentLanguage = 'en';
  private availableLanguages = [
    {
      lang: 'en'
    },
    {
      lang: 'fr'
    }
  ];

  constructor(
    private events: Events
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

  getAvailableLanguages(){
    return this.availableLanguages;
  }

  updateFromLocalStorage(){
     const langFromLocalStorage = localStorage.getItem('lang');
     if(langFromLocalStorage)
     {
      this.currentLanguage = langFromLocalStorage;
     }
  }

  updateFromUrl(){
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
    this.events.publish('lang:changed', {
      lang: language
    });
  }

}
