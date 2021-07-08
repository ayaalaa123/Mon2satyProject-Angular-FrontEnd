import { PrivateTender } from 'src/app/models/privateTender';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { PrivateTender } from '../models/privateTender';
import { privateTendersSupplierViewModel } from '../models/privateTendersSupplierViewModel';
import { Observable } from 'rxjs';
import { suppliersAndSuppinPrivate } from '../models/suppliersAndSuppinPrivate';

@Injectable({
  providedIn: 'root',
})
export class PtivatetenderserviceService {
  apiUrl = 'http://localhost:56748/api/PrivateTender';
  apiurlPrivateTenderReport = 'http://localhost:56748/api/PrivateTendersReport';
  apiprivatTender = 'http://localhost:56748/GetPrivateTenderReportByID';

  constructor(private http: HttpClient) {}
  getTender() {
    // return this.http.get<publicTender[]>(this.apiUrl);

    return this.http.get<PrivateTender[]>(this.apiUrl);
  }
  //get privatetenderReport
  getprivatetendersreport(id: number): Observable<any> {
    return this.http.get<privateTendersSupplierViewModel[]>(
      this.apiurlPrivateTenderReport + '/' + id
    );
  }
    //////list ofSupplierAndSupplierChoosen
    getReport(id: number): Observable<any> {
      return this.http.get<suppliersAndSuppinPrivate>(
        this.apiprivatTender + '?id=' + id
      );
    }
    //add Private tender
    addPrivateTender(obj: PrivateTender): Observable<any> {
      return this.http.post(this.apiUrl, obj);
    }
    //getTenderId
    getTenderById(pubID): Observable<any> {
      // return this.http.get<publicTender[]>(this.apiUrl);
  
      return this.http.get(this.apiUrl + '/' + pubID);
    }
    ///////////////////////
    assinSupplier(pupObj: PrivateTender): Observable<any> {
      return this.http.put<PrivateTender>(this.apiUrl, pupObj);
    }
}
