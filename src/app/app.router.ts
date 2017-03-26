import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverComponent } from "app/discover/discover.component";
import { HomeComponent } from "app/home/home.component";
import { MovieComponent } from "app/movie/movie.component";
import { MovieListComponent } from "app/movie/movie-list/movie-list.component";
import { MovieDetailComponent } from "app/movie/movie-detail/movie-detail.component";
import { PeopleComponent } from "app/people/people.component";
import { GenreComponent } from "app/genre/genre.component";
import { PeopleIndexComponent } from "app/people/people-index/people-index.component";
import { PeopleDetailComponent } from "app/people/people-detail/people-detail.component";

export const router: Routes = [
    { path: '', redirectTo: 'movie', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'people', component: PeopleComponent,
        children: [
            { path: '', component: PeopleIndexComponent },
            { path: ':id', component: PeopleDetailComponent }
        ]
     }, 
    { path: 'genre/:id', component: GenreComponent }, 
    { path: 'movie', component: MovieComponent, 
        children: [
            { path: '', component: MovieListComponent, data: {type: 'popular'} },
            { path: 'top-rated', component: MovieListComponent, data: {type: 'top_rated'} },
            { path: 'upcoming', component: MovieListComponent, data: {type: 'upcoming'} },
            { path: 'now-playing', component: MovieListComponent, data: {type: 'now_playing'} },
            { path: ':id', component: MovieDetailComponent },
        ]
     },
    { path: 'discover', component: DiscoverComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);