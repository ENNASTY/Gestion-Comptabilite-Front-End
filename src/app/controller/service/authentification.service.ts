import {UserAuth} from "../model/user-auth.model";
import {UserVo} from "../model/User.model";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import jwt_decode from 'jwt-decode';



class JwtHelperService {
}

export class AuthentificationService{
  private loginUrl = 'http://localhost:8036/login';
  public userCandidat = new UserAuth();
  private _authenticatedUser = new UserVo();
  public authenticated : boolean = false;

  constructor(private http: HttpClient,private  router : Router) {}

  public login(){
  this.http.post<any>(this.loginUrl,this.userCandidat,{observe:'response'}).subscribe(
    resp=> {
      const jwt = resp.headers.get('Authorization');
      if (typeof jwt === "string") {
        this.saveToken(jwt);
      }
      this.loadInfos();
      this.router.navigate(['facture']);
    },error => {
      console.log(error);

    }

  );
  }
  private saveToken(token: string ) {
    localStorage.setItem('token',token);
  }
  private loadInfos() {
    const helper = new JwtHelperService();
    const username = helper.decodeToken(localStorage.getItem('token')).sub;
    const roles = helper.decodeToken(localStorage.getItem('token')).roles;
    const passwordChange = helper.decodeToken(localStorage.getItem('token')).password;



    this._authenticatedUser.password = passwordChange;
    this.authenticated = true;

  }


  get authenticatedUser(): UserVo {
    return this._authenticatedUser;
  }

  set authenticatedUser(value: UserVo) {
    this._authenticatedUser = value;
  }



}
