import {TypeDeclarationTva} from "./type-declaration-tva.model";

export class DeclarationTva {
  public id: number;
  public ref: string;
  public tvaCollecte: number;
  public tvaPerdue: number;
  public diffTva: number;
  public annee: number;
  public mois: number;
  public trim: number;
  public typeDeclarationTva: TypeDeclarationTva;
}

