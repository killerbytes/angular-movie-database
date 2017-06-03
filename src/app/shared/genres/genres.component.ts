import { Component, OnInit, Input } from '@angular/core';
import { GenreService } from "../../services/genre.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: any;
  @Input() item;

  constructor(private genreService: GenreService) {}

  ngOnInit() {
  this.genreService.queryGenre('movie').then(res=>{
    
    this.genres = this.item.map(id=>res['genres'].find(i=>{ return i.id==id}))

  })

  }

}
