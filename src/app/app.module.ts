import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DiscoverComponent } from './discover/discover.component';
import { HomeComponent } from './home/home.component';
import { routes } from "app/app.router";
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { PeopleComponent } from './people/people.component';
import { GenreComponent } from './genre/genre.component';
import { PeopleIndexComponent } from './people/people-index/people-index.component';
import { PeopleDetailComponent } from './people/people-detail/people-detail.component';
import { SearchBoxComponent } from './shared/search-box/search-box.component';
import { GenresComponent } from './shared/genres/genres.component';
import { GenreService } from "./services/genre.service";
import { TvComponent } from './tv/tv.component';
import { TvDetailComponent } from './tv/tv-detail/tv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DiscoverComponent,
    HomeComponent,
    MovieComponent,
    MovieCardComponent,
    MovieListComponent,
    MovieDetailComponent,
    PeopleComponent,
    GenreComponent,
    PeopleIndexComponent,
    PeopleDetailComponent,
    SearchBoxComponent,
    GenresComponent,
    TvComponent,
    TvDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [GenreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
