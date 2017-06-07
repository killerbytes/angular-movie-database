import { Component, OnInit } from '@angular/core';
import { GenreService } from "app/services/genre.service";
import { ActivatedRoute } from "@angular/router";
import 'rxjs/Rx';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css'],
})
export class GenreComponent implements OnInit {
    model: any;
    genre: any;
  

  constructor(private route:ActivatedRoute, private genreService:GenreService) { }

  ngOnInit() {

    this.route.params.subscribe(res=>{
      let id = res['id'];
      
      this.genreService.queryGenre().then(res=>{
        this.genre = res['genres'].find(i=>{ return i.id==id});
      })


      this.genreService.findRecord(id).subscribe(res=>{
        this.model = res;
      })
    })
  }

}
