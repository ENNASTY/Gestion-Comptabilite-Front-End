import {RoleVo} from "./Role.model";

export class UserVo{
  public id : string;
  public username : string;
  public password : string;
  public enabled : boolean;
  public rolesVo : Array<RoleVo> = new Array<RoleVo>();

}
