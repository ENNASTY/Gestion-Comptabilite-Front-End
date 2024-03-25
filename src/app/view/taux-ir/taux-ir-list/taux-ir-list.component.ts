import { Component } from '@angular/core';
import {TauxIrService} from "../../../controller/service/taux-ir.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {TauxIR} from "../../../controller/model/taux-ir.model";
import {Employee} from "../../../controller/model/employee.model";

@Component({
  selector: 'app-taux-ir-list',
  templateUrl: './taux-ir-list.component.html',
  styleUrls: ['./taux-ir-list.component.css']
})
export class TauxIrListComponent {

  ngOnInit(): void {
    this.findAll();
  }

  constructor(private service: TauxIrService
    , private messageService: MessageService, private confirmationService: ConfirmationService) {

  }



  public findAll(): void {

    this.service.findAll().subscribe(data => this.items = data);

  }

  public delete(selected : TauxIR){
    this.selected = selected;
    this.confirmationService.confirm( {
      message : 'do you really want to delete the item '+ selected.ref + '?',
      header:'Confirm',
      icon : 'pi pi-exclamation-triangle',
      accept: () =>{
        this.service.deleteByRef(selected.ref).subscribe(data =>{
          this.items.splice(this.service.findIndexById(this.selected.id),1);
          this.selected = new TauxIR();
          this.messageService.add({
            severity : 'success',
            summary : 'Successful',
            detail: 'item deleted',
            life : 3000
          });
        });
      }
    });
  }


  public openCreate(){
    this.selected= new TauxIR();
    this.service.createDialog = true;
  }
  public openView(tauxIr : TauxIR){
    this.selected={...tauxIr};
    this.service.viewDialog=true;
  }
  public editCreate(tauxIr : TauxIR){
    this.selected= {... tauxIr};
    this.service.editDialog = true;
  }
  get selected(): TauxIR {

    return this.service.selected;
  }

  set selected(value: TauxIR) {
    this.service.selected = value;
  }

  get items(): Array<TauxIR> {

    return this.service.Items;
  }

  set items(value: Array<TauxIR>) {
    this.service.Items = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
}
