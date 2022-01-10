import { Injectable } from '@angular/core';
import { MenuElementsI } from './../../interfaces/menu-elements-i';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private linksMenu = [];

  private linksMenuFR: MenuElementsI[] = [
    {
      id: 1,
      name: 'Domicile',
      link: 'fr/home',
      image: 'home-outline'
    },
    {
      id: 2,
      name: 'MaLigne',
      link: 'fr/my-line',
      image: 'person-circle-outline'
    },
    {
      id: 3,
      name: 'Contrat',
      link: 'fr/contract-products',
      image: 'cart-outline'
    },
    {
      id: 4,
      name: 'MesFactures',
      link: 'fr/my-invoices',
      image: 'stats-chart-outline'
    }
  ];

  private linksMenuEN: MenuElementsI[] = [
    {
      id: 1,
      name: 'Home',
      link: 'en/home',
      image: 'home-outline'
    },
    {
      id: 2,
      name: 'MyLine',
      link: 'en/my-line',
      image: 'person-circle-outline'
    },
    {
      id: 3,
      name: 'Contract',
      link: 'en/contract-products',
      image: 'cart-outline'
    },
    {
      id: 4,
      name: 'MyInvoices',
      link: 'en/my-invoices',
      image: 'stats-chart-outline'
    }
  ];

  constructor() { }

  getElementsMenu(){
    return this.linksMenu;
  }

  setElementsMenu(lang: string){
    if(lang === 'fr'){
      this.linksMenu = this.linksMenuFR;
    }
    else{
      this.linksMenu = this.linksMenuEN;
    }
  }

}
