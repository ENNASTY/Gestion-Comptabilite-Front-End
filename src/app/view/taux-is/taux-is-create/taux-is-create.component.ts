import { Component } from '@angular/core';
import {TauxIrService} from "../../../controller/service/taux-ir.service";
import {MessageService} from "primeng/api";
import {TauxIR} from "../../../controller/model/taux-ir.model";
import {TauxIS} from "../../../controller/model/taux-is.model";
import {TauxIsService} from "../../../controller/service/taux-is.service";

@Component({
  selector: 'app-taux-is-create',
  templateUrl: './taux-is-create.component.html',
  styleUrls: ['./taux-is-create.component.css']
})
export class TauxIsCreateComponent {
  constructor(private service: TauxIsService, private messageService :  MessageService) {}
  ngOnInit(): void {

  }

  public save(): void {
    this.service.save().subscribe(data => {
      if(data != null){
        this.Items.push({...data});
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'item added',
          life: 3000});}
      else {
        if (data == null) {
          this.messageService.add({
            severity: 'warn',
            summary: 'Warn',
            detail: ' be carfule the informations are incorrect!',
            life: 4000
          });
        }

      }

    });


    this.service.createDialog = false;
    this.selected = new TauxIS();

  }

  get selected(): TauxIS {

    return this.service.selected;
  }

  set selected(value: TauxIS) {
    this.service.selected = value;
  }

  get Items(): Array<TauxIS> {

    return this.service.Items;
  }

  set Items(value: Array<TauxIS>) {
    this.service.Items = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog  }

  set createDialog(value: boolean) {
    this.service.createDialog= value;
  }

}
