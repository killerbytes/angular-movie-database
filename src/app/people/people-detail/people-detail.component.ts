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

  constructor(private route:ActivatedRoute, private peopleService:PeopleService) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.peopleService.findRecord(res['id']).subscribe(res=>{
        console.log(res)
        this.model = res;
      })

    })
  }

}
