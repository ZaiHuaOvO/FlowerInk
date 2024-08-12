import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../services/api';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  private api = API;
  constructor(private http: HttpService) {}

  getBlogs(): Observable<object> {
    return this.http.get(API.BLOG);
  }

  getTags(): Observable<object> {
    return this.http.get(API.TAG);
  }
}
