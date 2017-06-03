import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import { environment } from '../../environments/environment';

@Injectable()
export class GenreService {
  genres: any;

  constructor(private http:Http) { }

  queryGenre(type){
    return new Promise((resolve, reject) => {
      if(this.genres){

        resolve(this.genres);
      }else{
        this.http.get(`${environment.apiUrl}/genre/${type}/list?${environment.apiKey}`)
        .map(res=> res.json())
        .subscribe(res=>{
          resolve(res);
          this.genres = res;
        })
      }
    });
  }

  findRecord(id){
    return this.http.get(`${environment.apiUrl}/genre/${id}/movies?${environment.apiKey}`)
    .map(res=> res.json());
  }

}
