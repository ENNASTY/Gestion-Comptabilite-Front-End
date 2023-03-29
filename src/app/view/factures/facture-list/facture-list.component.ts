import {Component, OnInit} from '@angular/core';
import {FactureService} from "../../../controller/service/facture.service";
import {Facture} from "../../../controller/model/facture.model";
import {ConfirmationService, MessageService} from "primeng/api";
import {DeclarationTva} from "../../../controller/model/declaration-tva.model";

@Component({
  selector: 'app-facture-list',
  templateUrl: './facture-list.component.html',
  styleUrls: ['./facture-list.component.css']
})
export class FactureListComponent implements OnInit{
constructor(private messageService: MessageService, private confirmationService: ConfirmationService,private factureService: FactureService) {
}
  ngOnInit(): void {
  this.findAll();
  }
  public findAll(): void{
    this.factureService.findAll().subscribe(
      data => this.factures = data
    );
  }
  get facture(): any {
    return this.factureService.facture;
  }

  set facture(value: any) {
    this.factureService.facture = value;
  }

  get factures(): Array<Facture> {
    return this.factureService.factures;
  }

  set factures(value: Array<Facture>) {
    this.factureService.factures = value;
  }
  public deleteFacture(facture: Facture){
    this.facture = facture;
    this.confirmationService.confirm({
      message: 'Voulez-vous supprimer la facture - ' + facture.ref + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.factureService.deleteByReference(facture.ref).subscribe(data => {
          this.factures = this.factures.filter(val => val.id !== this.facture.id);
          this.facture = null;
          this.messageService.add({
            severity: 'success',
            summary: 'Successful',
            detail: 'Facture supprimee!',
            life: 3000
          });
        });
      }
    });
  }
  public openView(facture: Facture){
    this.facture={...facture};
    this.factureService.viewDialog=true;
  }
  public openCreate(){
    this.facture=new Facture();
    this.factureService.createDialog=true;
  }
}
