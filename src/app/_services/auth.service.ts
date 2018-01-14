import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { UserAccount } from './../_models/user-account/user-account.model';
import { UserSubject } from './../_models/user-subject/user-subject.model';

const LOGIN_API_URL = environment.loginApiUrl;

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  public login(UserAccount: UserAccount): Observable<UserSubject> {
    return this.http
      .post(LOGIN_API_URL + '/login', UserAccount)
      .map(response => {
        const subject = response;
        return new UserSubject(subject);
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error('ContentService::handleError', error);
    return Observable.throw(error);
  }


}
