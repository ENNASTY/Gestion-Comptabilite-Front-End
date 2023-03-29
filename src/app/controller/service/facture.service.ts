import {Injectable} from '@angular/core';
import {Facture} from "../model/facture.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../model/employee.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private _facture: Facture;
  private _factures: Array<Facture>;
  private _url = environment.baseUrl + 'facture/';
  private _viewDialog: boolean;
  private _createDialog: boolean;

  constructor(private _http: HttpClient) {
  }

  public save(): Observable<Facture> {
    return this._http.post<Facture>(this._url, this.facture);
  }

  public findAll(): Observable<Array<Facture>> {
    return this._http.get<Array<Facture>>(this._url);
  }

  public deleteByReference(ref: string): Observable<number> {
    return this._http.delete<number>(this._url + 'ref/' + ref);
  }


  get facture(): Facture {
    if (this._facture == null) {
      this._facture = new Facture();
    }
    return this._facture;
  }

  set facture(value: Facture) {
    this._facture = value;
  }

  get factures(): Array<Facture> {
    if (this._factures == null) {
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

