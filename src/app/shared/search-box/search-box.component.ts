import { Component, OnInit } from '@angular/core';
import { SearchService } from "app/services/search.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  providers: [SearchService]
})
export class SearchBoxComponent implements OnInit {
    model: any;
    query: string;

  constructor(private searchService: SearchService, private router: Router) { 
    router.events.subscribe(val=>{
      this.query = "";
    })
  }

  ngOnInit() {
  }
  close(){
    this.query = "";
  }
  onKey(e){
    this.searchService.query(e.target.value).subscribe(res=>{
      this.model = res;
    })
  }

  onSelect(e, item){
    e.preventDefault();
    console.log(e, item)
  }
}
