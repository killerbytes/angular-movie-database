import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { Http } from "@angular/http";

@Injectable()
export class SearchService {

  constructor(private http: Http) { }

  query(q){
    let query = `query=${q}`;
    
    return this.http.get(`${environment.apiUrl}/search/multi?${environment.apiKey}&${query}`)
      .map(res=> res.json());
  }

}
