import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubCategory } from '../models/SubCategory';
import { publicTender } from '../models/publicTender';
import { Supplier } from '../models/Supplier';
import { AuthService } from './auth.service';
import { PrivateTender } from '../models/privateTender';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierTenderServiceService {
  subCat: SubCategory = new SubCategory();

  publicTenders: publicTender[] = [];

  // apiSupplierPrivateTenderUri
  apiSupplierPrivateTenderUri = 'http://localhost:56748/api/suppliertender';

  // apiSupplierPublicTenderUri
  apiSupplierPublicTenderUri = 'http://localhost:56748/api/publictenderCat';

  currentSupplier: Supplier = new Supplier();

  constructor(private _http: HttpClient, private authService: AuthService) {}
  ngOnInit() {
    console.log('From Supplier Private Tenders Service');
  }
  // getPrivateTenders(id: number): Observable<any> {
  //   return this._http.get<PrivateTender[]>(
  //     this.apiSupplierPrivateTenderUri + '/' + id
  //   );
  // }

  // getPublicTenders(id: number): Observable<any> {
  //   return this._http.get<publicTender[]>(
  //     this.apiSupplierPublicTenderUri + '/' + id
  //   );
  // }

  getPrivateTenders(id: number) {
    return this._http.get<PrivateTender[]>(this.apiSupplierPrivateTenderUri + "/" + id);
  }
  
  getPublicTenders(id: number){
    return this._http.get<publicTender[]>(this.apiSupplierPublicTenderUri + "/" + id);
  }
}
  