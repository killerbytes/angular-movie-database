import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { environment } from '../../environments/environment';

@Injectable()
export class DiscoverService {
  constructor(private http: Http) { }

  query(){
    return this.http.get(`${environment.apiUrl}/discover/movie?${environment.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .map(res=> res.json());
  }


}
