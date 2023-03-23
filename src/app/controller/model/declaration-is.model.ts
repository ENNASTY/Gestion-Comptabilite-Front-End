import {TauxIS} from "./taux-is.model";

export class DeclarationIS {
  public id: number;
  public annee: number;
  public chiffAffaire: number;
  public charge: number;
  public benifice: number;
  public montantIS: number;
  public tauxIS: TauxIS;
}
