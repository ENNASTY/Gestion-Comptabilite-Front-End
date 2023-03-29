import { Injectable } from '@angular/core';
import {DeclarationIS} from "../model/declaration-is.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environnements/environnement";

@Injectable({
  providedIn: 'root'
})
export class DeclarationISServiceService {

  private _url = environment.baseUrl + 'declarationIs/';
  private _declarationIS :DeclarationIS ;
  private _declarationsIS: Array<DeclarationIS> ;





  public findAll():Observable<Array<DeclarationIS>>{
    return this.http.get<Array<DeclarationIS>>(this._url);
  }
  public save():Observable<DeclarationIS>{
    // @ts-ignore
    return this.http.post<DeclarationIS>(this._url , this.declarationIS);
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

  constructor(private http:HttpClient) { }
}
