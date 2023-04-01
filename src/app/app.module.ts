import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DeclarationTvaCreateComponent} from './view/declarationTva/declaration-tva-create/declaration-tva-create.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { DeclarationTvaListComponent } from './view/declarationTva/declaration-tva-list/declaration-tva-list.component';
import {ConfirmationService, MessageService} from "primeng/api";
import { DeclarationTvaViewComponent } from './view/declarationTva/declaration-tva-view/declaration-tva-view.component';
import {DialogModule} from "primeng/dialog";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
import {FactureCreateComponent} from "./view/factures/facture-create/facture-create.component";
import {FactureListComponent} from "./view/factures/facture-list/facture-list.component";
import { FactureViewComponent } from './view/factures/facture-view/facture-view.component';
import {DeclarationIRCreateComponent} from "./view/DeclarationIR/declaration-ir-create/declaration-ir-create.component";
import {DeclarationIRListComponent} from "./view/DeclarationIR/declaration-ir-list/declaration-ir-list.component";
import {DeclarationISCreateComponent} from "./view/DeclarationIS/declaration-is-create/declaration-is-create.component";
import {DeclarationISListComponent} from "./view/DeclarationIS/declaration-is-list/declaration-is-list.component";
import { DeclarationIsViewComponent } from './view/DeclarationIS/declaration-is-view/declaration-is-view.component';
@NgModule({
  declarations: [
    AppComponent,
    DeclarationTvaCreateComponent,
    DeclarationTvaListComponent,
    DeclarationTvaViewComponent,
    FactureCreateComponent,
    FactureListComponent,
    FactureViewComponent,
    DeclarationIRCreateComponent,
    DeclarationIRListComponent,
    DeclarationIsViewComponent,
    DeclarationISCreateComponent,
    DeclarationISListComponent,
    DeclarationIsViewComponent
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
    ],
  providers: [MessageService, ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
