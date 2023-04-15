import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FactureCreateComponent} from "./view/factures/facture-create/facture-create.component";
import {FactureListComponent} from "./view/factures/facture-list/facture-list.component";
import {EmployeeListComponent} from "./view/employees/employee-list/employee-list.component";
import {DeclarationIRListComponent} from "./view/DeclarationIR/declaration-ir-list/declaration-ir-list.component";
import {DeclarationISListComponent} from "./view/DeclarationIS/declaration-is-list/declaration-is-list.component";
import {DeclarationTvaListComponent} from "./view/declarationTva/declaration-tva-list/declaration-tva-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {TauxIrListComponent} from "./view/taux-ir/taux-ir-list/taux-ir-list.component";
import {TauxIsListComponent} from "./view/taux-is/taux-is-list/taux-is-list.component";
import {NotfoundComponent} from "./notfound/notfound.component";



const routes: Routes = [
  { path: '', redirectTo: 'factures', pathMatch: 'full' },
  { path: 'factures', component: FactureListComponent },
  { path: 'employe', component: EmployeeListComponent },
  { path: 'declarations/declarations-ir', component: DeclarationIRListComponent },
  { path: 'declarations/declarations-is', component:DeclarationISListComponent },
  { path: 'declarations/declaration-tva', component: DeclarationTvaListComponent },
  { path: 'taux/taux-ir', component: TauxIrListComponent },
  { path: 'taux/taux-is', component: TauxIsListComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
