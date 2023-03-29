import {Component, OnInit} from '@angular/core';
import {DeclarationTvaService} from "../../../controller/service/declaration-tva.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-declaration-tva-create',
  templateUrl: './declaration-tva-create.component.html',
  styleUrls: ['./declaration-tva-create.component.css']
})
export class DeclarationTvaCreateComponent implements OnInit {

  constructor(private messageService: MessageService ,private service: DeclarationTvaService) { }
  ngOnInit(): void {
  }
  public save(){
    return this.service.save().subscribe(
      data => {
        if (data != null){
          this.items.push({...data});
          console.log('bravo save declaration tva');
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Declaration TVA bien enregistrée!', life: 4000});
          this.selected = null;
          this.object2=null;
        }else {
          if (data==null){
            this.messageService.add({severity:'warn', summary: 'Warn', detail: 'la declaration de ce mois/Trimestre est deja validee!', life: 4000});
          }
        }
      },error => {
        this.messageService.add({severity:'error', summary: 'Error', detail: 'Error !', life: 4000});
      }

    );
  }

  public test() {
    this.service.test();
  }

  public afficheObject(){
    return this.service.afficheObject().subscribe(
      data => {
        this.object2 = data;
        console.log('bravo calcultva');
      }
    );
  }
  public hideCreateDialog() {
    this.createDialog = false;
  }

  get selected(): any {
    return this.service.selected;
  }
  set selected(value: any) {
    this.service.selected = value;
  }
  get a(): boolean {
    return this.service.a;
  }
  get b(): boolean {
    return this.service.b;
  }
  get c(): boolean {
    return this.service.c;
  }
  get object2(): any {
    return this.service.object2;
  }
  set object2(value: any) {
    this.service.object2 = value;
  }
  get items(): any {
    return this.service.items;
  }
  set items(value: any) {
    this.service.items = value;
  }
  get createDialog(): boolean {
    return this.service.createDialog;
  }

  set createDialog(value: boolean) {
    this.service.createDialog = value;
  }




}
