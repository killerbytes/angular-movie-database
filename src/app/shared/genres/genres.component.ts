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
  @Input() type;

  constructor(private genreService: GenreService) {}

  ngOnInit() {
  this.genreService.queryGenre().then(res=>{
    this.genres = this.item.map(id=>res.find(i=>{ return i.id==id }))
  })

  }

}
