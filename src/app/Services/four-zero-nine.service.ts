import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FourZeroNineService {

  constructor(private httpClient:HttpClient) { }

  GetFourZeroNine():Observable<any>{
    return this.httpClient.get('http://galway-bus.apis.ie/api/groute/');
  }
}
