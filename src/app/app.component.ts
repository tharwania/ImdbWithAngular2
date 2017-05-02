import { Component, OnInit } from '@angular/core';
import { OMDBService } from './omdb.service';


@Component({
  selector: 'my-app',
  templateUrl: `myAppTemplate.html`,
  styleUrls: ['SearchStyle.css'],
  providers: [ OMDBService ]
})


export class AppComponent{  
	movies : any = [];
	constructor(private _omdbService : OMDBService){}
	
	getMovie(movieTitle: string){
			this._omdbService.getMovieData(movieTitle)
				.subscribe(movieData => this.movies = movieData);
				console.log(this.movies);
	}
}
