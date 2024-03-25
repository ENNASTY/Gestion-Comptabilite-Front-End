import { Component } from '@angular/core';
import {TauxIrService} from "../../../controller/service/taux-ir.service";
import {MessageService} from "primeng/api";
import {TauxIR} from "../../../controller/model/taux-ir.model";

@Component({
  selector: 'app-taux-ir-edit',
  templateUrl: './taux-ir-edit.component.html',
  styleUrls: ['./taux-ir-edit.component.css']
})
export class TauxIrEditComponent {

  constructor(private service: TauxIrService, private messageService :  MessageService) {}
  ngOnInit(): void {

  }

  public edit(){
    if (this.selected.id){
      this.Items[this.service.findIndexById(this.selected.id)] = this.selected;
      this.service.save().subscribe(data => {
        this.selected = data;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Declaration IS Updated',
          life: 3000
        });
      });
      this.editDialog = false;
      this.selected = new TauxIR();

    }}


  get selected(): TauxIR{

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

  get editDialog(): boolean {
    return this.service.editDialog  }

  set editDialog(value: boolean) {
    this.service.editDialog= value;
  }


}
