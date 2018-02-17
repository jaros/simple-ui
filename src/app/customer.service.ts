import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';

import { MessageService } from "./message.service";

@Injectable()
export class CustomerService {
  constructor(private messageService: MessageService) {}

  getCustomers(): Observable<Customer[]> {
    this.messageService.add("CustomerService: fetched customers");
    return of(CUSTOMERS);
  }

  getCustomer(id: number): Observable<Customer> {
    // Todo: send the message _after_ fetching the customer
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(CUSTOMERS.find(c => c.id === id));
  }
}
