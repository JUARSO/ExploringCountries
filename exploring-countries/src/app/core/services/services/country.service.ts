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
  
  /**
   * getAllCountries is a method that fetches all the countries from the API.
   * @returns An observable of the countries.
   */
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API_BASE_URL}/all`).pipe(
      catchError(this.handleError)
    )
  }

  /**
   * getCountryByName is a method that fetches a country from the API by its name.
   * @param name - The name of the country to fetch.
   * @returns An observable of the country.
   */
  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.API_BASE_URL}/name/${name}`).pipe(
      catchError(this.handleError)
    )
  }

  /**
   * handleError is a method that handles errors that occur when fetching data from the API.
   * @param error - The error that occurred.
   * @returns An observable of the error.
   */
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error)  
    return throwError(() => new Error('Something went wrong'))
  }

}