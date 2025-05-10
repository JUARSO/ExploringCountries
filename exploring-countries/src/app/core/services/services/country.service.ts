import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { Country } from '../../models/country'

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private readonly API_BASE_URL = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) {}
  
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API_BASE_URL}/all`).pipe(
      catchError(this.handleError)
    )
  }

  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API_BASE_URL}/name/${name}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error)  
    return throwError(() => new Error('Something went wrong'))
  }

}