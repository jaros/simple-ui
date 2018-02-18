import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

import { of } from "rxjs/observable/of";

import { CustomerService } from "../customer.service";

import { CustomerDetailComponent } from "./customer-detail.component";

describe("CustomerDetailComponent", () => {
  let component: CustomerDetailComponent;
  let fixture: ComponentFixture<CustomerDetailComponent>;

  beforeEach(
    async(() => {
      let customerServiceStub = {
        getCustomer: function(id) {
          return of();
        }
      };
      TestBed.configureTestingModule({
        declarations: [CustomerDetailComponent],
        imports: [FormsModule, RouterTestingModule.withRoutes([])],
        providers: [{ provide: CustomerService, useValue: customerServiceStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
