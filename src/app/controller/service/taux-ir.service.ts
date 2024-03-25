import { Injectable } from '@angular/core';
import {TauxIR} from "../model/taux-ir.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TauxIrService {

  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;

  private _selected : TauxIR;
  private _Items : Array<TauxIR>;
  private url = 'http://localhost:8036/Gestion-comptabilite/v1/tauxIr/';
  public save (): Observable<TauxIR>{

    return  this.http.post<TauxIR>(this.url,this._selected);
  }
  public edit(): Observable<TauxIR> {
    return this.http.put<TauxIR>(this.url, this._selected);
  }
  public deleteByRef(ref : String): Observable<number>{

    return  this.http.delete<number>(this.url + "ref/" + ref );
  }
  public findAll (): Observable<Array<TauxIR>>{

    return  this.http.get<Array<TauxIR>>(this.url);
  }
  constructor(private http : HttpClient) {}
  public findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.Items.length; i++) {
      if (this.Items[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  get selected(): TauxIR {
    if (this._selected == null){
      this._selected = new TauxIR();
    }
    return this._selected;
  }

  set selected(value: TauxIR) {
    this._selected = value;
  }

  get Items(): Array<TauxIR> {
    if (this._selected == null){
      this._Items = new Array<TauxIR>();
    }
    return this._Items;
  }

  set Items(value: Array<TauxIR>) {
    this._Items = value;
  }


  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }

  get editDialog(): boolean {
    return this._editDialog;
  }

  set editDialog(value: boolean) {
    this._editDialog = value;
  }

  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }
}
