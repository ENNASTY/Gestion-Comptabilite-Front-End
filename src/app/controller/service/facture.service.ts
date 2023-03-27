import { Injectable } from '@angular/core';
import {Facture} from "../model/facture.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee.model";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
private _facture: Facture;
private _factures: Array<Facture>;
private _url = 'Gestion-comptabilite/v1/facture';
constructor(private _http: HttpClient) { }
  public save():Observable<Facture>{
    return this._http.post<Facture>(this._url , this.facture);
  }
  public findAll():Observable<Array<Facture>>{
    return this.http.get<Array<Facture>>(this.url);
  }
  public  deleteByReference(ref: string): Observable<number>{
    return this._http.delete<number>(this.url+'reference/'+ref);
  }


  get facture(): Facture {
  if(this._facture == null){
    this._facture = new Facture();
  }
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }

  get factures(): Array<Facture> {
  if(this._factures == null){
    this._factures = new Array<Facture>();
  }
    return this._factures;
  }

  set factures(value: Array<Facture>) {
    this._factures = value;
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
}

