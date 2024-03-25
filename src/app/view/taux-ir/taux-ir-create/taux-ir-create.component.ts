import { Component } from '@angular/core';
import {TauxIrService} from "../../../controller/service/taux-ir.service";
import {MessageService} from "primeng/api";
import {TauxIR} from "../../../controller/model/taux-ir.model";

@Component({
  selector: 'app-taux-ir-create',
  templateUrl: './taux-ir-create.component.html',
  styleUrls: ['./taux-ir-create.component.css']
})
export class TauxIrCreateComponent {
  constructor(private service: TauxIrService, private messageService :  MessageService) {}
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
            life: 2000
          });
        }

      }

    });


    this.service.createDialog = false;
    this.selected = new TauxIR();

  }

  get selected(): TauxIR {

    return this.service.selected;
  }

  set selected(value: TauxIR) {
    this.service.selected = value;
  }

  get Items(): Array<TauxIR> {

    return this.service.Items;
  }

  set Items(value: Array<TauxIR>) {
    this.service.Items = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog  }

  set createDialog(value: boolean) {
    this.service.createDialog= value;
  }

}
