import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CustomerDetailComponent } from "./customer-detail/customer-detail.component";

const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "customers", component: CustomersComponent },
  { path: "detail/:id", component: CustomerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
