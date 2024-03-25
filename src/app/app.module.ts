import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {DialogModule} from "primeng/dialog";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {FactureCreateComponent} from "./view/factures/facture-create/facture-create.component";
import {FactureListComponent} from "./view/factures/facture-list/facture-list.component";
import { FactureViewComponent } from './view/factures/facture-view/facture-view.component';
import { EmployeeCreateComponent } from './view/employees/employee-create/employee-create.component';
import { EmployeeListComponent } from './view/employees/employee-list/employee-list.component';
import { EmployeeViewComponent } from './view/employees/employee-view/employee-view.component';
import {DeclarationIRCreateComponent} from "./view/DeclarationIR/declaration-ir-create/declaration-ir-create.component";
import {DeclarationIRListComponent} from "./view/DeclarationIR/declaration-ir-list/declaration-ir-list.component";
import {DeclarationISCreateComponent} from "./view/DeclarationIS/declaration-is-create/declaration-is-create.component";
import {DeclarationISListComponent} from "./view/DeclarationIS/declaration-is-list/declaration-is-list.component";
import {DeclarationIsViewComponent} from "./view/DeclarationIS/declaration-is-view/declaration-is-view.component";
import {
  DeclarationTvaCreateComponent
} from "./view/declarationTva/declaration-tva-create/declaration-tva-create.component";
import {DeclarationTvaListComponent} from "./view/declarationTva/declaration-tva-list/declaration-tva-list.component";
import {DeclarationTvaViewComponent} from "./view/declarationTva/declaration-tva-view/declaration-tva-view.component";
import {HeaderComponent} from "./header/header.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BodyComponent} from "./body/body.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { TauxIrCreateComponent } from './view/taux-ir/taux-ir-create/taux-ir-create.component';
import { TauxIrListComponent } from './view/taux-ir/taux-ir-list/taux-ir-list.component';
import { TauxIrViewComponent } from './view/taux-ir/taux-ir-view/taux-ir-view.component';
import { TauxIrEditComponent } from './view/taux-ir/taux-ir-edit/taux-ir-edit.component';
import { TauxIsCreateComponent } from './view/taux-is/taux-is-create/taux-is-create.component';
import { TauxIsListComponent } from './view/taux-is/taux-is-list/taux-is-list.component';
import { TauxIsViewComponent } from './view/taux-is/taux-is-view/taux-is-view.component';
import { TauxIsEditComponent } from './view/taux-is/taux-is-edit/taux-is-edit.component';
import {NotfoundComponent} from "./notfound/notfound.component";
import {TableModule} from "primeng/table";


@NgModule({
  declarations: [
    AppComponent,
    FactureCreateComponent,
    FactureListComponent,
    FactureViewComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeViewComponent,
    DeclarationIRCreateComponent,
    DeclarationIRListComponent,
    DeclarationISCreateComponent,
    DeclarationISListComponent,
    DeclarationIsViewComponent,
    DeclarationTvaCreateComponent,
    DeclarationTvaListComponent,
    DeclarationTvaViewComponent,
    HeaderComponent,
    DashboardComponent,
    BodyComponent,
    SidenavComponent,
    TauxIrCreateComponent,
    TauxIrListComponent,
    TauxIrViewComponent,
    TauxIrEditComponent,
    TauxIsCreateComponent,
    TauxIsListComponent,
    TauxIsViewComponent,
    TauxIsEditComponent,
    NotfoundComponent,





  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastModule,
    ToolbarModule,
    FormsModule,
    ButtonModule,
    ConfirmDialogModule,
    DialogModule,
    PaginatorModule,
    BrowserAnimationsModule,
    RippleModule,
    ReactiveFormsModule,
    RouterOutlet,
    AppRoutingModule,
    TableModule,
  ],
  providers: [MessageService, ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
