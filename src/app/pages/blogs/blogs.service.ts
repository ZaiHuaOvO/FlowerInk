import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Observable } from 'rxjs';
import { API } from '../../services/api';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  private api = API
  constructor(
    private http: HttpService
  ) { }

  getBlogs(): Observable<object> {
    return this.http.get(API.GET_BLOGS);
  }

}
