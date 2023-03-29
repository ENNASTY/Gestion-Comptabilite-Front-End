import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeclarationIRCreateComponent } from './view/DeclarationIR/declaration-ir-create/declaration-ir-create.component';
import { DeclarationIRListComponent } from './view/DeclarationIR/declaration-ir-list/declaration-ir-list.component';
import { DeclarationISCreateComponent } from './view/DeclarationIS/declaration-is-create/declaration-is-create.component';
import { DeclarationISListComponent } from './view/DeclarationIS/declaration-is-list/declaration-is-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    DeclarationIRCreateComponent,
    DeclarationIRListComponent,
    DeclarationISCreateComponent,
    DeclarationISListComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
