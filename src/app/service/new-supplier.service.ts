import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewSupplier } from '../models/NewSupplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewSupplierService {
  newsup: NewSupplier[];
  supId: number;
  newsupp: NewSupplier[];

  apinewSuppliersUri = 'http://localhost:56748/api/NewSupplier';
  apiConfirmedUri='http://localhost:56748/api/Confirmed';

  apiUpdateRegisteredUri = 'http://localhost:56748/api/updateRegistered';


  constructor(private http: HttpClient) {}

  updateRegistered(newSupp: NewSupplier) {
    return this.http.post<NewSupplier>(this.apiUpdateRegisteredUri, newSupp);
  }

  addNewSupplier(newSupp: NewSupplier) {
    return this.http.post(this.apinewSuppliersUri, newSupp);
  }
  getnewsuppliers(): Observable<any> {
    return this.http.get(this.apinewSuppliersUri);
  }
  ///details
  GetnewSupplierById (id: number) {
    return this.http.get<NewSupplier>(`${this.apinewSuppliersUri}/${id}`)
    
    }
    //delete new supplier
    deleteCurrentSupplier(id:number)
    {
      return this.http.delete(`${this.apinewSuppliersUri}/${id}`)
    }
    updateNewSupplir(obj:NewSupplier)
    {
      return this.http.post(this.apiConfirmedUri,obj);

    }

    
  // getsupplier(id:number):NewSupplier|null{
  //   for(let i=0;i<this.newsup.length;i++){
  //     if(this.newsup[i].id==id)
  //     {
  //       return this.newsup[i];
  //     }
  //   return null;

  // }
  // }
}
