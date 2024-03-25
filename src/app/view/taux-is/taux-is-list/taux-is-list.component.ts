import { Component } from '@angular/core';
import {TauxIrService} from "../../../controller/service/taux-ir.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {TauxIR} from "../../../controller/model/taux-ir.model";
import {TauxIS} from "../../../controller/model/taux-is.model";
import {TauxIsService} from "../../../controller/service/taux-is.service";

@Component({
  selector: 'app-taux-is-list',
  templateUrl: './taux-is-list.component.html',
  styleUrls: ['./taux-is-list.component.css']
})
export class TauxIsListComponent {

  constructor(private service: TauxIsService
    , private messageService: MessageService, private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.findAll();
  }



  public findAll(): void {

    this.service.findAll().subscribe(data => this.items = data);

  }

  public delete(selected : TauxIS){
    this.selected = selected;
    this.confirmationService.confirm( {
      message : 'do you really want to delete the item '+ selected.ref + '?',
      header:'Confirm',
      icon : 'pi pi-exclamation-triangle',
      accept: () =>{
        this.service.deleteByRef(selected.ref).subscribe(data =>{
          this.items.splice(this.service.findIndexById(this.selected.id),1);
          this.selected = new TauxIS();
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
    this.selected= new TauxIS();
    this.service.createDialog = true;
  }
  public openView(tauxIs : TauxIS){
    this.selected={...tauxIs};
    this.service.viewDialog=true;
  }
  public editCreate(tauxIs : TauxIS){
    this.selected= {... tauxIs};
    this.service.editDialog = true;
  }
  get selected(): TauxIS{

    return this.service.selected;
  }

  set selected(value: TauxIS) {
    this.service.selected = value;
  }

  get items(): Array<TauxIS> {

    return this.service.Items;
  }

  set items(value: Array<TauxIS>) {
    this.service.Items = value;
  }

  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }
}
