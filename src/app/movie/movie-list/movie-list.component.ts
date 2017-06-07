import { Component, OnInit } from '@angular/core';
import { MovieService } from "app/services/movie.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  providers: [MovieService]
})
export class MovieListComponent implements OnInit {
  model: any;
  constructor(private movieService:MovieService, private route:ActivatedRoute) { }

  ngOnInit() {
    let type = this.route.snapshot.data['type'];

    this.movieService.findRecords(type).subscribe((res)=>{
      this.model = res;
    })
  }

}
