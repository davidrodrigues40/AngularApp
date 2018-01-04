import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SnsMessage } from '../model/sns-objects';

@Injectable()
export class SnsService {
  apiUrl: string = 'http://TestingAPI.mysite.com/api/SNS/';
  headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('Origin', 'http://localhost:4200');
   }
  
  postMessage(message: SnsMessage): Observable<any> 
  {
    console.log(JSON.stringify(message));
    let url: string = this.apiUrl + 'publish/message';
    console.log('Url' + url);
    return this.httpClient.post(url, message,
    { 
      headers: this.headers
    });
  };
}
