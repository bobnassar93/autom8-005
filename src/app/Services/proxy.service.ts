/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonService } from './common.service';

@Injectable()
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
  Admin_log_in(i_Params_Admin_log_in: Params_Admin_log_in): Observable<Admin_log_in_res> {
    this.url = this.APIBaseUrl + '/Admin_log_in?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Admin_log_in>(this.url, JSON.stringify(i_Params_Admin_log_in), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Ui_By_OWNER_ID(i_Params_Get_Ui_By_OWNER_ID: Params_Get_Ui_By_OWNER_ID): Observable<Ui[]> {
    this.url = this.APIBaseUrl + '/Get_Ui_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Ui_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Ui_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Plc_By_OWNER_ID(i_Params_Get_Plc_By_OWNER_ID: Params_Get_Plc_By_OWNER_ID): Observable<Plc[]> {
    this.url = this.APIBaseUrl + '/Get_Plc_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Plc_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Plc_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Hardware_link_By_OWNER_ID(i_Params_Get_Hardware_link_By_OWNER_ID: Params_Get_Hardware_link_By_OWNER_ID): Observable<Hardware_link[]> {
    this.url = this.APIBaseUrl + '/Get_Hardware_link_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Hardware_link_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Hardware_link_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Outlet_type_By_OWNER_ID(i_Params_Get_Outlet_type_By_OWNER_ID: Params_Get_Outlet_type_By_OWNER_ID): Observable<Outlet_type[]> {
    this.url = this.APIBaseUrl + '/Get_Outlet_type_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Outlet_type_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Outlet_type_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Floor_By_OWNER_ID(i_Params_Get_Floor_By_OWNER_ID: Params_Get_Floor_By_OWNER_ID): Observable<Floor[]> {
    this.url = this.APIBaseUrl + '/Get_Floor_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Floor_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Floor_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Room_By_OWNER_ID(i_Params_Get_Room_By_OWNER_ID: Params_Get_Room_By_OWNER_ID): Observable<Room[]> {
    this.url = this.APIBaseUrl + '/Get_Room_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Room_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Room_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Outlet_By_OWNER_ID(i_Params_Get_Outlet_By_OWNER_ID: Params_Get_Outlet_By_OWNER_ID): Observable<Outlet[]> {
    this.url = this.APIBaseUrl + '/Get_Outlet_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Outlet_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Outlet_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Get_Outlet_ui_By_OWNER_ID(i_Params_Get_Outlet_ui_By_OWNER_ID: Params_Get_Outlet_ui_By_OWNER_ID): Observable<Outlet_ui[]> {
    this.url = this.APIBaseUrl + '/Get_Outlet_ui_By_OWNER_ID?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Outlet_ui_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Outlet_ui_By_OWNER_ID), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
  }
  Edit_Ui(i_Ui: Ui): Observable<Ui> {
    this.url = this.APIBaseUrl + '/Edit_Ui?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Ui>(this.url, JSON.stringify(i_Ui), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Ui; }));
  }
  Edit_Plc(i_Plc: Plc): Observable<Plc> {
    this.url = this.APIBaseUrl + '/Edit_Plc?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Plc>(this.url, JSON.stringify(i_Plc), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Plc; }));
  }
  Edit_Hardware_link(i_Hardware_link: Hardware_link): Observable<Hardware_link> {
    this.url = this.APIBaseUrl + '/Edit_Hardware_link?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Hardware_link>(this.url, JSON.stringify(i_Hardware_link), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Hardware_link; }));
  }
  Edit_Outlet_type(i_Outlet_type: Outlet_type): Observable<Outlet_type> {
    this.url = this.APIBaseUrl + '/Edit_Outlet_type?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Outlet_type>(this.url, JSON.stringify(i_Outlet_type), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Outlet_type; }));
  }
  Edit_Floor(i_Floor: Floor): Observable<Floor> {
    this.url = this.APIBaseUrl + '/Edit_Floor?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Floor>(this.url, JSON.stringify(i_Floor), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Floor; }));
  }
  Edit_Room(i_Room: Room): Observable<Room> {
    this.url = this.APIBaseUrl + '/Edit_Room?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Edit_Room>(this.url, JSON.stringify(i_Room), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Room; }));
  }
  Delete_Outlet(i_Params_Delete_Outlet: Params_Delete_Outlet): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Outlet?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Outlet), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Delete_Ui(i_Params_Delete_Ui: Params_Delete_Ui): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Ui?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Ui), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Delete_Plc(i_Params_Delete_Plc: Params_Delete_Plc): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Plc?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Plc), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Delete_Hardware_link(i_Params_Delete_Hardware_link: Params_Delete_Hardware_link): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Hardware_link?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Hardware_link), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Delete_Outlet_type(i_Params_Delete_Outlet_type: Params_Delete_Outlet_type): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Outlet_type?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Outlet_type), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Delete_Floor(i_Params_Delete_Floor: Params_Delete_Floor): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Floor?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Floor), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Delete_Room(i_Params_Delete_Room: Params_Delete_Room): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Room?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Room), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Delete_Outlet_ui(i_Params_Delete_Outlet_ui: Params_Delete_Outlet_ui): Observable<string> {
    this.url = this.APIBaseUrl + '/Delete_Outlet_ui?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Outlet_ui), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.ExceptionMsg; }));
  }
  Get_Service_Data(i_Params_Get_Service_Data: Params_Get_Service_Data): Observable<Service_Data_Result> {
    this.url = this.APIBaseUrl + '/Get_Service_Data?Ticket=' + this.common.ticket;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'ticket': this.common.ticket });
    const options = { headers: headers };
    return this.api.post<Result_Get_Service_Data>(this.url, JSON.stringify(i_Params_Get_Service_Data), options)
      .pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result; }));
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
  My_Outlet_Ui: Outlet_ui;
  UI_Element: Ui;
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
  My_Outlet: Outlet[];
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
  My_Hardware_link: Hardware_link[];
}
export class Params_Delete_User {
  USER_ID?: number;
}
export class Params_Admin_log_in {
  My_UserInfo: UserInfo;
}
export class Admin_log_in_res {
  MyUser: UserInfo;
}
export class Params_Get_Ui_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Plc_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Hardware_link_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Outlet_type_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Floor_By_OWNER_ID {
  OWNER_ID?: number;
  UserID?: number;
}
export class Floor {
  FLOOR_ID?: number;
  NAME: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  MyRooms: Room[];
}
export class Params_Get_Room_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Outlet_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Outlet_ui_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Delete_Outlet {
  OUTLET_ID?: number;
}
export class Params_Delete_Ui {
  UI_ID?: number;
}
export class Params_Delete_Plc {
  PLC_ID?: number;
}
export class Params_Delete_Hardware_link {
  HARDWARE_LINK_ID?: number;
}
export class Params_Delete_Outlet_type {
  OUTLET_TYPE_ID?: number;
}
export class Params_Delete_Floor {
  FLOOR_ID?: number;
}
export class Params_Delete_Room {
  ROOM_ID?: number;
}
export class Params_Delete_Outlet_ui {
  OUTLET_UI_ID?: number;
}
export class Params_Get_Service_Data {
  My_UserInfo: UserInfo;
}
export class Service_Data_Result {
  My_PLCs: Plc[];
  My_UserInfo: UserInfo;
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
export class Result_Admin_log_in extends Action_Result {
  My_Result: Admin_log_in_res;
  My_Params_Admin_log_in: Params_Admin_log_in;
}
export class Result_Get_Ui_By_OWNER_ID extends Action_Result {
  My_Result: Ui[];
  My_Params_Get_Ui_By_OWNER_ID: Params_Get_Ui_By_OWNER_ID;
}
export class Result_Get_Plc_By_OWNER_ID extends Action_Result {
  My_Result: Plc[];
  My_Params_Get_Plc_By_OWNER_ID: Params_Get_Plc_By_OWNER_ID;
}
export class Result_Get_Hardware_link_By_OWNER_ID extends Action_Result {
  My_Result: Hardware_link[];
  My_Params_Get_Hardware_link_By_OWNER_ID: Params_Get_Hardware_link_By_OWNER_ID;
}
export class Result_Get_Outlet_type_By_OWNER_ID extends Action_Result {
  My_Result: Outlet_type[];
  My_Params_Get_Outlet_type_By_OWNER_ID: Params_Get_Outlet_type_By_OWNER_ID;
}
export class Result_Get_Floor_By_OWNER_ID extends Action_Result {
  My_Result: Floor[];
  My_Params_Get_Floor_By_OWNER_ID: Params_Get_Floor_By_OWNER_ID;
}
export class Result_Get_Room_By_OWNER_ID extends Action_Result {
  My_Result: Room[];
  My_Params_Get_Room_By_OWNER_ID: Params_Get_Room_By_OWNER_ID;
}
export class Result_Get_Outlet_By_OWNER_ID extends Action_Result {
  My_Result: Outlet[];
  My_Params_Get_Outlet_By_OWNER_ID: Params_Get_Outlet_By_OWNER_ID;
}
export class Result_Get_Outlet_ui_By_OWNER_ID extends Action_Result {
  My_Result: Outlet_ui[];
  My_Params_Get_Outlet_ui_By_OWNER_ID: Params_Get_Outlet_ui_By_OWNER_ID;
}
export class Result_Edit_Ui extends Action_Result {
  My_Ui: Ui;
}
export class Result_Edit_Plc extends Action_Result {
  My_Plc: Plc;
}
export class Result_Edit_Hardware_link extends Action_Result {
  My_Hardware_link: Hardware_link;
}
export class Result_Edit_Outlet_type extends Action_Result {
  My_Outlet_type: Outlet_type;
}
export class Result_Edit_Floor extends Action_Result {
  My_Floor: Floor;
}
export class Result_Edit_Room extends Action_Result {
  My_Room: Room;
}
export class Result_Delete_Outlet extends Action_Result {
  My_Params_Delete_Outlet: Params_Delete_Outlet;
}
export class Result_Delete_Ui extends Action_Result {
  My_Params_Delete_Ui: Params_Delete_Ui;
}
export class Result_Delete_Plc extends Action_Result {
  My_Params_Delete_Plc: Params_Delete_Plc;
}
export class Result_Delete_Hardware_link extends Action_Result {
  My_Params_Delete_Hardware_link: Params_Delete_Hardware_link;
}
export class Result_Delete_Outlet_type extends Action_Result {
  My_Params_Delete_Outlet_type: Params_Delete_Outlet_type;
}
export class Result_Delete_Floor extends Action_Result {
  My_Params_Delete_Floor: Params_Delete_Floor;
}
export class Result_Delete_Room extends Action_Result {
  My_Params_Delete_Room: Params_Delete_Room;
}
export class Result_Delete_Outlet_ui extends Action_Result {
  My_Params_Delete_Outlet_ui: Params_Delete_Outlet_ui;
}
export class Result_Get_Service_Data extends Action_Result {
  My_Result: Service_Data_Result;
  My_Params_Get_Service_Data: Params_Get_Service_Data;
}
