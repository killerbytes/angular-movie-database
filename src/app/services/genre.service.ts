import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { environment } from '../../environments/environment';

@Injectable()
export class GenreService {

  constructor(private http:Http) { }

  queryGenre(type){
    return this.http.get(`${environment.apiUrl}/genre/${type}/list?${environment.apiKey}`)
    .map(res=> res.json());
  }

  findRecord(id){
    return this.http.get(`${environment.apiUrl}/genre/${id}/movies?${environment.apiKey}`)
    .map(res=> res.json());
  }

}
