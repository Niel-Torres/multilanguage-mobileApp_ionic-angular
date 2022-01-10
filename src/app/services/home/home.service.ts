import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private contentForDashboard = [];

  private contentForDashboardEN = [{
    title: 'Bienvenido',
    subTitle: 'Welcome'
  }];

  private contentForDashboardFR = [{
    title: 'Bonjour',
    subTitle: 'Bienvenue'
  }];

  constructor() { }

  getContentForDashboard(){
    return this.contentForDashboard;
  }

  setContentForDashboard(lang: string){
    if(lang === 'en'){
      this.contentForDashboard = this.contentForDashboardEN;
    }
    else{
      this.contentForDashboard = this.contentForDashboardFR;
    }
  }
}
