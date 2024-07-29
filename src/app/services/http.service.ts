// src/app/services/http.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private api = API.BASE_URL
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  // 通用 GET 方法
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.api + url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // 通用 POST 方法
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(this.api + url, body, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // 通用 PUT 方法
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(this.api + url, body, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // 通用 DELETE 方法
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(this.api + url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // 错误处理
  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error.message || error);
  }
}
