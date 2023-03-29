import {Component, OnInit} from '@angular/core';
import {FactureService} from 'src/app/controller/service/facture.service';
import {Facture} from 'src/app/controller/model/facture.model';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-facture-create',
  templateUrl: './facture-create.component.html',
  styleUrls: ['./facture-create.component.css']
})
export class FactureCreateComponent implements  OnInit {
  ngOnInit(): void {
  }
  constructor(private messageService: MessageService ,private factureService: FactureService) {
  }

  public hideCreateDialog() {
    this.createDialog = false;
  }
  public save(): void {
    this.factureService.save().subscribe(data => {
      if (data != null) {
        this.factures.push({...data});
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Facture bien enregistrée!', life: 4000});
        this.facture=null;
      }
      if(data == null){
        this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Cette facture existe deja !', life: 4000});
      }
    });

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
  get createDialog(): boolean {
    return this.factureService.createDialog;
  }

  set createDialog(value: boolean) {
    this.factureService.createDialog = value;
  }


}
