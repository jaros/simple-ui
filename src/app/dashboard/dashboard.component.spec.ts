import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

import { CustomerSearchComponent } from "../customer-search/customer-search.component";
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";

import { DashboardComponent } from "./dashboard.component";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(
    async(() => {
      let mockCustomers: Observable<Customer[]> = of([
        { id: 11, name: "Mr. Nice" },
        { id: 12, name: "Narco" },
        { id: 13, name: "Bombasto" },
        { id: 14, name: "Celeritas" },
        { id: 15, name: "Magneta" },
        { id: 16, name: "Bob" }
      ]);
      let customerServiceStub = {
        getCustomers: function() {
          return mockCustomers;
        }
      };

      TestBed.configureTestingModule({
        declarations: [CustomerSearchComponent, DashboardComponent],
        imports: [RouterTestingModule.withRoutes([])],
        providers: [{ provide: CustomerService, useValue: customerServiceStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
