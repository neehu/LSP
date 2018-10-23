import { HttpClient, HttpHeaders} from  '@angular/common/http';

export const checkLoginUrl:string ="http://localhost:62481/api/Customer/CheckLoginDetails?";
export const userName:string="userName=";
export const password:string="password=";
export const city:string="city=";
export const country:string="country=";
export const address:string="address=";
export const emailAddress:string="emailAddress=";
export const phoneNumber:string="phoneNumber=";
export const submitFormUrl:string="http://localhost:62481/api/Customer/GetNewCustomer?";
export const googleApi:string="https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Ban&types=(cities)&key=";
export const apiKey:string="AIzaSyDRgGW-c6-2-ibZwdpV8qqefxMHTJG6yQY";
export const getProductsUrl:string="http://localhost:62481/api/Products/postProductdetails";
export const gettlistofCategoriesUrl="http://localhost:62481/api/Products/postlistofCategories";
export const options = { headers: new HttpHeaders({ 
    'Access-Control-Allow-Headers': 'Content-Type','Access-Control-Allow-Origin':'*', "Access-Control-Allow-Method":"GET, POST, PUT, DELETE" }) 
    };
export const addItemsCart="http://localhost:62481/api/CustomerShoppingDetails/GetselectedProducts?"
export const productIDString:string="productID=";
export const customerIDString:string="customerID=";
export const quantityString:string="quantity=";
export const getItemsInCart="http://localhost:62481/api/CustomerShoppingDetails/postSelectedProductList?customerID="
export const deleteItems="http://localhost:62481/api/CustomerShoppingDetails/deleteProduct?customerID="
export const productKey="productID="
export const customerID:string="customerID="
export const changeEmailAddress="http://localhost:62481/api/Customer/ChangeEmail?customerID="
export const newEmailAddress="newEmailAddress="
export const postCustomerDetails="http://localhost:62481/api/Customer/PostCustomerDetail?customerID="
