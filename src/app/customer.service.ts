import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

import { Customer } from './customer';

import { MessageService } from "./message.service";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable()
export class CustomerService {
  private customersUrl = "api/customers"; // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.customersUrl)
      .pipe(
        tap(customers => this.log(`fetched customers`)),
        catchError(this.handleError("getCustomers", []))
      );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http
      .get<Customer>(url)
      .pipe(
        tap(_ => this.log(`fetched customer id=${id}`)),
        catchError(this.handleError<Customer>(`getCustomer id=${id}`))
      );
  }

  /** PUT: update the Customer on the server */
  updateCustomer(customer: Customer): Observable<any> {
    return this.http
      .put(this.customersUrl, customer, httpOptions)
      .pipe(
        tap(_ => this.log(`updated customer id=${customer.id}`)),
        catchError(this.handleError<any>("updateCustomer"))
      );
  }

  private log(message: string) {
    this.messageService.add("CustomerService: " + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
