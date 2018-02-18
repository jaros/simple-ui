import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import { MockBackend } from "@angular/http/testing";
import { MessageService } from "./message.service";

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, deps: [MockBackend] },
        MessageService,
        CustomerService
      ]
    });
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
