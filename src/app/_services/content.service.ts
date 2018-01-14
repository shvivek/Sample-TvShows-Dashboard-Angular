import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'environments/environment';
import { Show } from '../_models/show/show.model';

const API_URL = environment.tvShowsApiUrl;

@Injectable()
export class ContentService {

  constructor(private http: Http) { }

  // API: GET /shows
  public getAllShows(): Observable<Show[]> {
    return this.http
      .get(API_URL + '/shows')
      .map(response => {
        const shows = response.json();
        return shows.map((show) => new Show(show));
      })
      .catch(this.handleError);
  }

  // API: GET /shows/:id
  public getShowById(showId: number): Observable<Show> {
    return this.http
      .get(API_URL + '/shows/' + showId)
      .map(response => {
        return new Show(response.json());
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ContentService::handleError', error);
    return Observable.throw(error);
  }

}
