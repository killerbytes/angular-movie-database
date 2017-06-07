import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class GenreService {
  genres: any

  constructor(private http:Http) {}

  queryGenre():any{
    return new Promise((resolve, reject) => {
      if(this.genres){
        resolve(this.genres);
      }else{
        let movie = this.http.get(`${environment.apiUrl}/genre/movie/list?${environment.apiKey}`)
            .map(res=> res.json())
        let tv = this.http.get(`${environment.apiUrl}/genre/tv/list?${environment.apiKey}`)
            .map(res=> res.json())
        
        Observable.forkJoin([movie, tv]).subscribe(res=> {
          this.genres = res[0].genres.concat(res[1].genres)
          resolve(this.genres)
        });
        // this.http.get(`${environment.apiUrl}/genre/${type}/list?${environment.apiKey}`)
        // .map(res=> res.json())
        // .subscribe(res=>{
        //   this.genres[type] = res.genres;
        // })
      }
    });
  }

  findRecord(id){
    return this.http.get(`${environment.apiUrl}/genre/${id}/movies?${environment.apiKey}`)
    .map(res=> res.json());
  }

}
