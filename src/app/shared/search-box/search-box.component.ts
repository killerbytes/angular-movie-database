import { Component, OnInit } from '@angular/core';
import { SearchService } from "app/services/search.service";

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [SearchService]
})
export class SearchBoxComponent implements OnInit {
    model: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  onKey(e){
    this.searchService.query(e.target.value).subscribe(res=>{
      this.model = res;
    })
  }
}
