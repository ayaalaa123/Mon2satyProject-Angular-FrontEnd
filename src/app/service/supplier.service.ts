import { publicTender } from './../models/publicTender';
import { SupplierApplyForTender } from './../models/supplierApplyForTender';
import { Supplier } from './../models/Supplier';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierTelephoneFax } from '../models/SupplierTelphoneFax';
import { NewSupplier } from '../models/NewSupplier';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  Supplier:Supplier[];

  apiSuppliersUri = 'http://localhost:56748/api/supplier';
  //getSupplierById?id={id}
  apigetsupplierbyI = 'http://localhost:56748/getSupplierById';
   //addsupplierAdmin
   apiadminadd = 'http://localhost:56748/postAdmin';

 
    apiGetPrivateTendersUrl = 'http://localhost:56748/api/supplierPrivateTenders';

    apiGetPublicTendersUrl = 'http://localhost:56748/api/supplierPublicTenders';
     

  constructor(private http:HttpClient) { }

  getPublicTenders(supplierID: number) {
    return this.http.get<publicTender[]>(this.apiGetPublicTendersUrl + "?supplierID=" + supplierID);
  }

  
  getPrivateTenders(supplierID: number) {
    return this.http.get<publicTender[]>(this.apiGetPrivateTendersUrl + "?supplierID=" + supplierID);
  }

  getSuppliers(){
    // console.log(this._http.get<Supplier[]>(this.apiSuppliersUri));
    return this.http.get<Supplier[]>(this.apiSuppliersUri);
  } 
  //createSupplier(supploierTelphoneFax)
  addSupplier(suppTelFaxobj:SupplierTelephoneFax) 
  {
    return this.http.post(this.apiSuppliersUri,suppTelFaxobj)
  } 

  confirmNewSupplier(newSupplier: NewSupplier) {
    return this.http.post('http://localhost:56748/api/confirmed', newSupplier);
  }

  getSupplierById(id:number){
    return this.http.get<SupplierTelephoneFax>(this.apiSuppliersUri+"/"+id);
  }
//add supplier withinAdmin
addSupplierAdmin(suppTelFaxobj: SupplierTelephoneFax) {
  return this.http.post(this.apiadminadd, suppTelFaxobj);
}

  
  editSupplier(supplierInDB: SupplierTelephoneFax) {
    return this.http.put(this.apiSuppliersUri, supplierInDB);
  }

  supplierApplyForTender(obj: SupplierApplyForTender) {
    return this.http.post<SupplierApplyForTender>('http://localhost:56748/api/applyForTender', obj);
  }

}
