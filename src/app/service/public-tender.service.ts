import { SupplierApplyForTender } from './../models/supplierApplyForTender';
import { listOfSupplierandsupplier } from './../models/listOfSupplierandsupplier';
import { publicTender } from './../models/publicTender';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { PublicTendersSuppliersViewModel } from '../models/PublicTendersSuppliersViewModel';

@Injectable({
  providedIn: 'root',
})
export class PublicTenderService {
  pubTender: publicTender[];

  // var obj=new publicTender(){

  // Brochure='',
  // Supplier:Supplier,
  // Date:Date,
  // SupplierID:number,
  // SubCategory:SubCategory,
  // SubCategoryID:number,
  // TenderDescription='',
  // };

  apiUrl = 'http://localhost:56748/api/publicTender';


  apipublicTendrUrl = 'http://localhost:56748/GetPublicTenderReportByID';
  ///api/PublicTendersReport/2
  apipublictenderwithsupplierurl = 'http://localhost:56748/api/PublicTendersReport';

  apiPublicTenderReportUrl = 'http://localhost:56748/PublicTendersReport';



  constructor(private http: HttpClient) {}


  getSuppliersPublicTenders() {
    return this.http.get<SupplierApplyForTender[]>(this.apiPublicTenderReportUrl);
  }

  getConfirmationForPayment(supplierTender: SupplierApplyForTender) {
    return this.http.post('http://localhost:56748/api/confirmPayment', supplierTender);
  }

  getTender(): Observable<any> {
    // return this.http.get<publicTender[]>(this.apiUrl);

    return this.http.get(this.apiUrl);
  }

  addTender(publTender: publicTender): Observable<any> {
    return this.http.post(this.apiUrl, publTender);
  }
  //get PublicTender by id of subcatogries
  getReportPublicTender(id: number): Observable<any> {
    return this.http.get(this.apipublicTendrUrl + '?id=' + id);
  }
  //return list of supppliers in certain subcatogries(search)
  getSuppliers(id: number): Observable<any> {
    return this.http.get(this.apipublictenderwithsupplierurl + '/' + id);
  }
  assinSupplier(pupObj: publicTender): Observable<any> {
    return this.http.put(this.apiUrl, pupObj);
  }
  assignSupplier(publicTender: publicTender) {
    // return this.http.put(this.apiUrl, {
    //   params: { tenderId: tenderId, supplierId: supId },
    //   listOfSupplierandsupplier

    // });
    return this.http.put(this.apiUrl, publicTender);
  }


}
