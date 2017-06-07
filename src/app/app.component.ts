import { Component, OnInit } from '@angular/core';
import { GenreService } from "./services/genre.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GenreService]
})
export class AppComponent implements OnInit{

  constructor(private genreService:GenreService) { }

  ngOnInit() {
    this.genreService.queryGenre()
  }

}

