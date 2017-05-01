import { Component, OnInit } from '@angular/core';
import { OMDBService } from './omdb.service';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  			 <button (click)="getMovie()">Click Me</button>
  			 
  				{{movies.Title}}
  			`,
  providers: [ OMDBService ]
})


export class AppComponent implements OnInit{ 
	name = 'Angular'; 
	movies : any = [];
	constructor(private _omdbService : OMDBService){}
	
	ngOnInit(){
		this._omdbService.getMovieData()
				.subscribe(movieData => this.movies = movieData);
	}
	getMovie(){
			console.log(this.movies);
	}
}
