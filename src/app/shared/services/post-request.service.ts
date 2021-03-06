import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostRequestService {

  private url = environment.url_serveur;

  constructor(private http: HttpClient) { }

  public postRequest(data: any, dataClass): Observable<any[]> {

    return this.http.post<any[]>(this.url + dataClass, data)
    .pipe(
      tap(data => console.log('datas :', data))
    );
  }

  public putRequest(data: any, dataClass): Observable<any[]> {

    return this.http.put<any[]>(this.url + dataClass, data)
    .pipe(
      tap(data => console.log('datas :', data))
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
