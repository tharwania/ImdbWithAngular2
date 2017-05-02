import { Component } from '@angular/core';


@Component({
	selector: "movie-view",
	template: `
	<div class="container" [hidden]="!movie.Response">
    	<div class="row">
        	<div class="col-md-4">
            	<div class="imgAbt">
                	<img class="img-responsive" src="{{movie.Poster}}" />
            	</div>
        	</div>
        	<div class="col-md-6">
        		<div class="table-responsive">
  					<table class="table">
  						<thead>
    						<tr>
      							<th>{{movie.Title}}</th>
      						</tr>
      					</thead>
      					<tbody>
      						<tr>
      							<th scope="row">Actor</th>
      							<td>{{movie.Actors}}</td>
      						</tr>
      						<tr>
      							<th scope="row">Director</th>
      							<td>{{movie.Director}}</td>
      						</tr>
      						<tr>
      							<th scope="row">Genre</th>
      							<td>{{movie.Genre}}</td>
      						</tr>
      						<tr>
      							<th scope="row">Language</th>
      							<td>{{movie.Language}}</td>
      						</tr>
      						<tr>
      							<th scope="row">Production</th>
      							<td>{{movie.Production}}</td>
      						</tr>
      						<tr>
      							<th scope="row">Released</th>
      							<td>{{movie.Released}}</td>
      						</tr>
      						<tr>
      							<th scope="row">Runtime</th>
      							<td>{{movie.Runtime}}</td>
      						</tr>
      						<tr>
      							<th scope="row">Ratting</th>
      							<td>{{movie.imdbRating}}</td>
      						</tr>
      					</tbody>
    					 
  					</table>
				</div>
            	
        	</div>
    	</div>
	</div>`,
	inputs: [ "movie" ] 
})




export class MovieViewComponent{
	movie: string = "";
}