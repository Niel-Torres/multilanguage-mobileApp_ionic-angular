import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MultilanguageService } from '../multilanguage/multilanguage.service';
import * as jsonLocalMenu from 'src/api/mocks/menu.json';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private linksMenu = [];

  constructor(
    private http: HttpClient,
    private language: MultilanguageService
  )
  {
    this.linksMenu = this.getJsonLocal(this.language.getCurrentLang());
  }

  getElementsMenu(){
    return this.linksMenu;
  }

  setElementsMenu(lang: string){
    this.linksMenu = this.getJsonLocal(lang);
  }

  getApiMenu(lang: string){
    const url = '/api/'+lang;
    this.http.get(url)
      .subscribe(
        result => {
          console.log('MenuService: GET API '+url);
          //this.linksMenu = result;
        },
        err => {
          console.log(err);
        }
      );
  }

  getJsonLocal(lang: string){
    const stringJson = JSON.stringify(jsonLocalMenu);
    const stringObject = JSON.parse(stringJson);
    if(lang === 'en'){
      return stringObject.en;
    }else {
      return stringObject.fr;
    }
  }

}
