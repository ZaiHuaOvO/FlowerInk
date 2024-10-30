import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from '../../services/api';
import { HttpService } from '../../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class LifeService {
  private api = API;
  constructor(private http: HttpService) {}
  getLifes(tag: string = '', year?: number): Observable<object> {
    return this.http.get(API.LIFE + `?&tag=${tag}&year=${year}`);
  }

  getYears(): Observable<object> {
    return this.http.get(API.LIFE_YEAR);
  }

  getLifeTags(): Observable<object> {
    return this.http.get(API.LIFE_TAG);
  }
}
