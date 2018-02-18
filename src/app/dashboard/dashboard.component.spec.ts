import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from "@angular/router";

import { HttpClient } from "@angular/common/http";
import { MockBackend } from "@angular/http/testing";
import { CustomerSearchComponent } from '../customer-search/customer-search.component';
import { CustomerService } from "../customer.service";
import { MessageService } from "../message.service";

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerSearchComponent, DashboardComponent],
      imports: [RouterModule],
      providers: [
        { provide: HttpClient, deps: [MockBackend] },
        CustomerService,
        MessageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
