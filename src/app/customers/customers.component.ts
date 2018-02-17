import { Component, OnInit } from '@angular/core';
import { Customer } from  '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: "app-customers",
  templateUrl: "./customers.component.html",
  styleUrls: ["./customers.component.css"]
})
export class CustomersComponent implements OnInit {
  
  customers: Customer[];

  constructor(private customerService: CustomerService) {}

  loadCustomers(): void {
    this.customerService.getCustomers().subscribe(c => this.customers = c);
  }

  ngOnInit() {
    this.loadCustomers();
  }
}
