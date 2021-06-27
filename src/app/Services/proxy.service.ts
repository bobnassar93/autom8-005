/* eslint-disable quote-props */
/* eslint-disable object-shorthand */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class Proxy {
  APIBaseUrl = '';
  url = '';
  constructor(public api: HttpClient, private common: CommonService) {
    this.APIBaseUrl = common.APIUrl;
  }
  Get_All_Data(i_Params_Get_All_Data: Params_Get_All_Data): Observable<All_Data> {
    this.url = this.APIBaseUrl + '/Get_All_Data?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_All_Data>(this.url, JSON.stringify(i_Params_Get_All_Data), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_User_By_OWNER_ID(i_Params_Get_User_By_OWNER_ID: Params_Get_User_By_OWNER_ID): Observable<User[]> {
    this.url = this.APIBaseUrl + '/Get_User_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_User_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_User_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Edit_Outlet(i_Outlet: Outlet): Observable<Outlet> {
    this.url = this.APIBaseUrl + '/Edit_Outlet?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Outlet>(this.url, JSON.stringify(i_Outlet), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Outlet; }));
  }
  Edit_Outlet_ui(i_Outlet_ui: Outlet_ui): Observable<Outlet_ui> {
    this.url = this.APIBaseUrl + '/Edit_Outlet_ui?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Outlet_ui>(this.url, JSON.stringify(i_Outlet_ui), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Outlet_ui; }));
  }
  Edit_User(i_User: User): Observable<User> {
    this.url = this.APIBaseUrl + '/Edit_User?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_User>(this.url, JSON.stringify(i_User), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_User; }));
  }
  Delete_User(i_Params_Delete_User: Params_Delete_User): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_User?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_User), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
}
export class Params_Get_All_Data {
  My_UserInfo: UserInfo;
}
export class UserInfo {
  UserName: string;
  Password: string;
  OwnerID: number;
  UserID: number;
  IsAuthenticated: boolean;
  Ticket: string;
}
export class All_Data {
  User: UserInfo;
  Floors: Floor[];
  MyColors: Ui[];
}
export class Params_Get_User_By_OWNER_ID {
  OWNER_ID?: number;
}
export class User {
  USER_ID?: number;
  OWNER_ID?: number;
  USERNAME: string;
  PASSWORD: string;
  USER_TYPE_CODE: string;
  IS_ACTIVE?: boolean;
  ENTRY_DATE: string;
}
export class Outlet {
  OUTLET_ID?: number;
  OUTLET_TYPE_ID?: number;
  HARDWARE_LINK_ID?: number;
  ROOM_ID?: number;
  NAME: string;
  CURRENT_VALUE: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Outlet_type: Outlet_type;
  My_Hardware_link: Hardware_link;
  My_Room: Room;
  UI_Element: Ui;
  Outlet_UI: Outlet_ui;
}
export class Outlet_type {
  OUTLET_TYPE_ID?: number;
  NAME: string;
  MIN_VALUE?: number;
  MAX_VALUE?: number;
  IS_DIGITAL?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Hardware_link {
  HARDWARE_LINK_ID?: number;
  PLC_ID?: number;
  PLC_ADDRESS: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Plc: Plc;
}
export class Room {
  ROOM_ID?: number;
  FLOOR_ID?: number;
  NAME: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Floor: Floor;
  MyOutlets: Outlet[];
}
export class Ui {
  UI_ID?: number;
  COLOR: string;
  OTHER: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Plc {
  PLC_ID?: number;
  LOCATION: string;
  PORT: string;
  TYPE: string;
  CURRENT_INPUTS?: number;
  MAX_INPUTS?: number;
  CURRENT_OUTPUTS?: number;
  MAX_OUTPUTS?: number;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Floor {
  FLOOR_ID?: number;
  NAME: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  MyRooms: Room[];
}
export class Outlet_ui {
  OUTLET_UI_ID?: number;
  OUTLET_ID?: number;
  UI_ID?: number;
  USER_ID?: number;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  DESCRIPTION: string;
  My_Outlet: Outlet;
  My_Ui: Ui;
  My_User: User;
}
export class Params_Delete_User {
  USER_ID?: number;
}
export class Action_Result {
  ExceptionMsg: string;
}
export class Result_Get_All_Data extends Action_Result {
  My_Result: All_Data;
  My_Params_Get_All_Data: Params_Get_All_Data;
}
export class Result_Get_User_By_OWNER_ID extends Action_Result {
  My_Result: User[];
  My_Params_Get_User_By_OWNER_ID: Params_Get_User_By_OWNER_ID;
}
export class Result_Edit_Outlet extends Action_Result {
  My_Outlet: Outlet;
}
export class Result_Edit_Outlet_ui extends Action_Result {
  My_Outlet_ui: Outlet_ui;
}
export class Result_Edit_User extends Action_Result {
  My_User: User;
}
export class Result_Delete_User extends Action_Result {
  My_Params_Delete_User: Params_Delete_User;
}
