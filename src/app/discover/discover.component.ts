import { Component, OnInit } from '@angular/core';
import { DiscoverService } from "../services/discover.service";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css'],
  providers: [DiscoverService]
})
export class DiscoverComponent implements OnInit {
    model: any;

  constructor(private discoverService: DiscoverService) { }

  ngOnInit() {
    this.discoverService.query().subscribe(res=>{
      console.log(res)
      this.model = res;
    })
    
  }

}
