import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class MovieService {
  constructor(private http: Http) { 
  }

  findRecord(id){
    return this.http.get(`${environment.apiUrl}/movie/${id}?${environment.apiKey}&append_to_response=credits,images,recommendations`)
      .map(res=>res.json());
  }
  
  findRecords(type){
    return this.http.get(`${environment.apiUrl}/movie/${type}?${environment.apiKey}`)
      .map(res=>res.json());
  }


}
