import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

import { environment } from '../../environments/environment';

@Injectable()
export class TvService {

  constructor(private http: Http) { }

  findRecord(id){
    return this.http.get(`${environment.apiUrl}/tv/${id}?${environment.apiKey}&append_to_response=credits,images,recommendations`)
      .map(res=>res.json());
  }

}
