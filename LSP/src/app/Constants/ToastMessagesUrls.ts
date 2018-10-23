import { HttpHeaders } from "@angular/common/http";

export const getMessagesUrl="http://localhost:62481/api/ToastMessage/getMessages?";
export const content:string="content=";
export const style:string="style=";
export const postMessagesUrl="http://localhost:62481/api/ToastMessage/postMessages";
export const dismissMessageUrl="http://localhost:62481/api/ToastMessage/dismissMessage?";
export const messageID:string="messageID=";
export const options = { headers: new HttpHeaders({ 
    'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin':'*', "Access-Control-Allow-Method":"GET, POST, PUT, DELETE" }) 
    };