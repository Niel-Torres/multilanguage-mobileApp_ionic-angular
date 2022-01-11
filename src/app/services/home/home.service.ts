import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ){}

  doMockGetRequest(){
    //
  }

  doHttpGetRequest(lang: string) {
    const apiURL = '/api/home?language='+lang;
    return new Promise((resolve, reject) => {
      this.http.get(apiURL)
        .toPromise()
        .then(
          response => {
            console.log('HomeService getData: Async Work Complete');
            resolve(response);
          },
          err => {
            reject(err);
          }
        );
    });
  }

}


