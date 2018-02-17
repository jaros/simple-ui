import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from "../customer.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loadCustomers();
  }

  loadCustomers(): void {
    this.customerService
      .getCustomers()
      .subscribe(c => (this.customers = c.slice(1, 5)));
  }
}
