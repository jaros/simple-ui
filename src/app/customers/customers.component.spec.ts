import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { of } from "rxjs/observable/of";

import { CustomerService } from "../customer.service";

import { CustomersComponent } from "./customers.component";

describe("CustomersComponent", () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(
    async(() => {
      let customerServiceStub = {
        getCustomers: function() {
          return of();
        }
      };
      TestBed.configureTestingModule({
        declarations: [CustomersComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: CustomerService, useValue: customerServiceStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
