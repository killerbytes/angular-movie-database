import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TvService } from "../../services/tv.service";

@Component({
  selector: 'app-tv-list',
  templateUrl: './tv-list.component.html',
  styleUrls: ['./tv-list.component.scss'],
  providers: [TvService]
})
export class TvListComponent implements OnInit {
  model: any;

  constructor(private route: ActivatedRoute, private tvService: TvService) { }

  ngOnInit() {
    let type = this.route.snapshot.data['type'];
    console.log(type)

    this.tvService.findRecords(type).subscribe((res)=>{
      this.model = res;
    })
  }

}
