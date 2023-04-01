import { Injectable } from '@angular/core';
import {DeclarationIR} from "../model/declaration-ir.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeclarationIRServiceService {

    private _declarationIR :DeclarationIR ;
    private _declarationsIR: Array<DeclarationIR> ;
  private _url = environment.baseUrl + 'declarationIr/';

  public save():Observable<DeclarationIR>{
    return this.http.post<DeclarationIR>(this._url , this.declarationIR);
  }
  public findAll(declarationsIR : DeclarationIR):Observable<Array<DeclarationIR>>{
    return this.http.get<Array<DeclarationIR>>(this._url);
  }
  constructor(private http:HttpClient) { }


  get declarationIR(): DeclarationIR {
    if(this._declarationIR == null) {
      this._declarationIR = new DeclarationIR();
    }
    return this._declarationIR;
  }

  set declarationIR(value: DeclarationIR) {
    this._declarationIR = value;
  }

  get declarationsIR(): Array<DeclarationIR> {
    if(this._declarationsIR == null) {
      this._declarationsIR = new Array<DeclarationIR>();
    }
    return this._declarationsIR;
  }

  set declarationsIR(value: Array<DeclarationIR>) {
    this._declarationsIR = value;
  }
}
