import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { of } from "rxjs/observable/of";

import { CustomerService } from "../customer.service";

import { CustomerSearchComponent } from "./customer-search.component";

describe("CustomerSearchComponent", () => {
  let component: CustomerSearchComponent;
  let fixture: ComponentFixture<CustomerSearchComponent>;

  beforeEach(
    async(() => {
      let customerServiceStub = {
        getCustomers: function() {
          return of();
        }
      };
      TestBed.configureTestingModule({
        declarations: [CustomerSearchComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: CustomerService, useValue: customerServiceStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
