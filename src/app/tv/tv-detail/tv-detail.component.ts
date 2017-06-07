import { Component, OnInit } from '@angular/core';
import { TvService } from "../../services/tv.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss'],
  providers: [TvService]
})
export class TvDetailComponent implements OnInit {
  cast: any[];
  model: any;


  constructor(private tvService: TvService, private route: ActivatedRoute) { 
  }
  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.tvService.findRecord(res['id']).subscribe(res=>{
        this.model = res;
        this.cast = this.model.credits.cast.slice(0, 5);
      })
    })
  }

}
