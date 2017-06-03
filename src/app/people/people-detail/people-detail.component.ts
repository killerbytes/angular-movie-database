import { Component, OnInit } from '@angular/core';
import { PeopleService } from "app/services/people.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css'],
  providers: [PeopleService]
})
export class PeopleDetailComponent implements OnInit {
    model: any;
    movies: String[];

  constructor(private route:ActivatedRoute, private peopleService:PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.peopleService.findRecord(res['id']).subscribe(res=>{
        this.model = res;
        this.movies = res.movie_credits.cast.slice(0,10);
      })

    })
  }

}
