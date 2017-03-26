import { Component, OnInit } from '@angular/core';
import { MovieService } from "app/services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [MovieService]
})
export class MovieDetailComponent implements OnInit {
  model: any;
  constructor(private movieService:MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
    this.movieService.findRecord(res['id']).subscribe(res=>{
      this.model = res;
    })
      
    })
  }

}
