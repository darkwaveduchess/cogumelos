import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CogumeloService {

  constructor(private httpClient: HttpClient)  {
    const allCogumelosUrl = 'http://myshroom.ca/find?deadly=1&limit=1';
    this.httpClient.get(allCogumelosUrl).subscribe( data => {
      console.log(data);
    });

  }
}