import { Component, OnInit } from '@angular/core';
import { PeopleService } from "app/services/people.service";

@Component({
  selector: 'app-people-index',
  templateUrl: './people-index.component.html',
  styleUrls: ['./people-index.component.css'],
  providers: [PeopleService]
})
export class PeopleIndexComponent implements OnInit {
    model: any;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.query().subscribe(res=>{
      this.model = res;
    })
  }

}
