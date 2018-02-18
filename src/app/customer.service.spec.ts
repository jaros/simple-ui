import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from "@angular/common/http";
import { MockBackend } from "@angular/http/testing";
import { MessageService } from "./message.service";

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  beforeEach(() => {
    let messageServiceStub = { add: function(msg: string) {}, clear: function() {} };
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, deps: [MockBackend] },
        { provide: MessageService, useValue: messageServiceStub },
        CustomerService
      ]
    });
  });

  it('should be created', inject([CustomerService], (service: CustomerService) => {
    expect(service).toBeTruthy();
  }));
});
