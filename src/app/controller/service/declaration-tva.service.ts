import { Injectable } from '@angular/core';
import {DeclarationTva} from "../model/declaration-tva.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {DeclarationTvaVo2} from "../model/declaration-tva-vo2.model";
import {DeclarationTvaVo1} from "../model/declaration-tva-vo1.model";

@Injectable({
  providedIn: 'root'
})
export class DeclarationTvaService {
  private _url= environment.baseUrl +"declarationTva/";
  private _selected: DeclarationTva;
  private _items: Array<DeclarationTva>;

  private _object1: DeclarationTvaVo1;
  private _object2: DeclarationTvaVo2;

  private _viewDialog: boolean;
  private _createDialog: boolean;

  private _a = false;
  private _b = false;
  private _c = false;

  constructor(private _http: HttpClient) { }
  public findAll(): Observable<Array<DeclarationTva>> {
    return this.http.get<Array<DeclarationTva>>(this._url);
  }
  public deleteDeclaration(selected: DeclarationTva): Observable<number>{
    return this.http.delete<number>(this.url + 'ref/' + selected.ref);
  }

  public save(): Observable<DeclarationTva> {
    return  this.http.post<DeclarationTva>(this.url, this.selected);
  }
  public test() {
    this.a = true;
    if (this.selected.typeDeclarationTva.ref == 'TDTV1') {
      this.c = false;
      this.b = true;
    } else {
      this.b = false;
      this.c = true;
    }
  }

  public afficheObject(): Observable<DeclarationTvaVo2>{
    this.object1.typedeclarationtva = this.selected.typeDeclarationTva.ref;
    this.object1.annee = this.selected.annee;
    this.object1.mois = this.selected.mois;
    this.object1.trim = this.selected.trim;
    return this.http.post<DeclarationTvaVo2>( this.url + 'calcultva',this.object1);
  }
  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get selected(): DeclarationTva {
    if(this._selected == null){
      this._selected = new DeclarationTva();
    }
    return this._selected;
  }

  set selected(value: DeclarationTva) {
    this._selected = value;
  }

  get items(): Array<DeclarationTva> {
    if (this._items == null){
      this._items = new Array<DeclarationTva>();
    }
    return this._items;
  }

  set items(value: Array<DeclarationTva>) {
    this._items = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }
  get a(): boolean {
    return this._a;
  }

  set a(value: boolean) {
    this._a = value;
  }

  get b(): boolean {
    return this._b;
  }

  set b(value: boolean) {
    this._b = value;
  }

  get c(): boolean {
    return this._c;
  }

  set c(value: boolean) {
    this._c = value;
  }

  get object1(): DeclarationTvaVo1 {
    if (this._object1 == null){
      this._object1 = new DeclarationTvaVo1();
    }
    return this._object1;
  }

  set object1(value: DeclarationTvaVo1) {
    this._object1 = value;
  }

  get object2(): DeclarationTvaVo2 {
    if (this._object2 == null){
      this._object2 = new DeclarationTvaVo2();
    }
    return this._object2;
  }

  set object2(value: DeclarationTvaVo2) {
    this._object2 = value;
  }


  get viewDialog(): boolean {
    return this._viewDialog;
  }

  set viewDialog(value: boolean) {
    this._viewDialog = value;
  }

  get createDialog(): boolean {
    return this._createDialog;
  }

  set createDialog(value: boolean) {
    this._createDialog = value;
  }
}
