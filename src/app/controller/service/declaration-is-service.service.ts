import { Injectable } from '@angular/core';
import {DeclarationIS} from "../model/declaration-is.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeclarationISServiceService {

  private _url = environment.baseUrl +"declarationIs/";
  private _declarationIS :DeclarationIS ;
  private _declarationsIS: Array<DeclarationIS> ;

  private _viewDialog: boolean;
  private _createDialog: boolean;

  public deleteDeclaration(selected: DeclarationIS): Observable<number>{
    return this._http.delete<number>(this._url + 'annee/' + selected.annee);
  }
  public findAll():Observable<Array<DeclarationIS>>{
    return this._http.get<Array<DeclarationIS>>(this._url);
  }
  public save():Observable<DeclarationIS>{
    return this.http.post<DeclarationIS>(this.url, this.declarationIS);
  }
  get declarationIS(): DeclarationIS {
    if(this._declarationIS == null) {
      this._declarationIS = new DeclarationIS();
    }
    return this._declarationIS;
  }

  set declarationIS(value: DeclarationIS) {
    this._declarationIS = value;
  }

  get declarationsIS(): Array<DeclarationIS> {
    if(this._declarationsIS == null) {
      this._declarationsIS = new Array<DeclarationIS>();
    }
    return this._declarationsIS;
  }

  set declarationsIS(value: Array<DeclarationIS>) {
    this._declarationsIS = value;
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


  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get http(): HttpClient {
    return this._http;
  }

  set http(value: HttpClient) {
    this._http = value;
  }

  constructor(private _http:HttpClient) { }
}
