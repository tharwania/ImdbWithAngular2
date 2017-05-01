import { Injectable } from '@angular/core';
import  { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()
export class OMDBService{
	private url: string = "http://www.omdbapi.com/?t=Harry+Potter";

	constructor(private _http: Http){}

	getMovieData() {
		return this._http.get(this.url)
			.map((response: Response) => response.json());
	}
}