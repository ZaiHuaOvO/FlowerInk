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
  getLifes(tag: string = ''): Observable<object> {
    return this.http.get(API.LIFE + `?&tag=${tag}`);
  }
}
