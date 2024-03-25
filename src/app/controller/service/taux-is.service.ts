import { Injectable } from '@angular/core';
import {TauxIS} from "../model/taux-is.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TauxIsService {


  private _createDialog: boolean;
  private _editDialog: boolean;
  private _viewDialog: boolean;
  private _selected : TauxIS;
  private _Items : Array<TauxIS>;
  private url = 'http://localhost:8036/Gestion-comptabilite/v1/tauxIs/';
  public save (): Observable<TauxIS>{

    return  this.http.post<TauxIS>(this.url,this._selected);
  }
  public edit(): Observable<TauxIS> {
    return this.http.put<TauxIS>(this.url, this._selected);
  }
  public deleteByRef(ref : String): Observable<number>{

    return  this.http.delete<number>(this.url + "ref/" + ref );
  }
  public findAll (): Observable<Array<TauxIS>>{

    return  this.http.get<Array<TauxIS>>(this.url);
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
  get selected(): TauxIS {
    if (this._selected == null){
      this._selected = new TauxIS();
    }
    return this._selected;
  }

  set selected(value: TauxIS) {
    this._selected = value;
  }

  get Items(): Array<TauxIS> {
    if (this._selected == null){
      this._Items = new Array<TauxIS>();
    }
    return this._Items;
  }

  set Items(value: Array<TauxIS>) {
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
