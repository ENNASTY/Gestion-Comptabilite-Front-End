import { Component } from '@angular/core';
import {TauxIsService} from "../../../controller/service/taux-is.service";
import {MessageService} from "primeng/api";
import {TauxIS} from "../../../controller/model/taux-is.model";

@Component({
  selector: 'app-taux-is-edit',
  templateUrl: './taux-is-edit.component.html',
  styleUrls: ['./taux-is-edit.component.css']
})
export class TauxIsEditComponent {
  constructor(private service: TauxIsService, private messageService :  MessageService) {}
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
      this.selected = new TauxIS();

    }}

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

  get editDialog(): boolean {
    return this.service.editDialog  }

  set editDialog(value: boolean) {
    this.service.editDialog= value;
  }



}
