import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from 'src/app/view/employees/employee-create/employee-create.component';
import { EmployeeListComponent } from 'src/app/view/employees/employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FactureCreateComponent } from 'src/app/view/factures/facture-create/facture-create.component';
import { FactureListComponent } from 'src/app/view/factures/facture-list/facture-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    FactureCreateComponent,
    FactureListComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
