import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DeclarationTvaCreateComponent} from './view/declarationTva/declaration-tva-create/declaration-tva-create.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { DeclarationTvaListComponent } from './view/declarationTva/declaration-tva-list/declaration-tva-list.component';
import {ConfirmationService, MessageService} from "primeng/api";
import { DeclarationTvaViewComponent } from './view/declarationTva/declaration-tva-view/declaration-tva-view.component';
import {DialogModule} from "primeng/dialog";
import {PaginatorModule} from "primeng/paginator";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RippleModule} from "primeng/ripple";
@NgModule({
  declarations: [
    AppComponent,
    DeclarationTvaCreateComponent,
    DeclarationTvaListComponent,
    DeclarationTvaViewComponent,
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
    ],
  providers: [MessageService, ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
