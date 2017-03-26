import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { environment } from '../../environments/environment';

@Injectable()
export class PeopleService {

  constructor(private http:Http) { }

  findRecord(id){
    return this.http.get(`${environment.apiUrl}/person/${id}?${environment.apiKey}&append_to_response=movie_credits,tv_credits`)
      .map(res=> res.json())
  }

  query(type='popular'){
    return this.http.get(`${environment.apiUrl}/person/${type}?${environment.apiKey}`)
      .map(res=> res.json());

  }

}
