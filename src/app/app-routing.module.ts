import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: ':language',
    children : [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'contract-products',
        loadChildren: () => import('./pages/contract-products/contract-products.module').then( m => m.ContractProductsPageModule)
      },
      {
        path: 'my-line',
        loadChildren: () => import('./pages/my-line/my-line.module').then( m => m.MyLinePageModule)
      },
      {
        path: 'my-invoices',
        loadChildren: () => import('./pages/my-invoices/my-invoices.module').then( m => m.MyInvoicesPageModule)
      }
    ]
  },
  {
    path: 'contract-products',
    loadChildren: () => import('./pages/contract-products/contract-products.module').then( m => m.ContractProductsPageModule)
  },
  {
    path: 'my-line',
    loadChildren: () => import('./pages/my-line/my-line.module').then( m => m.MyLinePageModule)
  },
  {
    path: 'my-invoices',
    loadChildren: () => import('./pages/my-invoices/my-invoices.module').then( m => m.MyInvoicesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
