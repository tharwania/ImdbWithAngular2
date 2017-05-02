import { Injectable } from '@angular/core';
import  { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";


@Injectable()
export class OMDBService{
	

	constructor(private _http: Http){}

	getMovieData(title: string) {
		var url = "http://www.omdbapi.com/?t="+title;

		return this._http.get(url)
			.map((response: Response) => response.json());
	}
}