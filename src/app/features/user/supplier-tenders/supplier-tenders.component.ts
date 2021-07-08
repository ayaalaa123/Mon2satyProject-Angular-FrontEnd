import { Login } from './../../../models/Login';
import { AuthService } from './../../../service/auth.service';
import { Supplier } from './../../../models/Supplier';
import { PrivateTender } from './../../../models/privateTender';
import { publicTender } from './../../../models/publicTender';
import { SupplierService } from 'src/app/service/supplier.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-tenders',
  templateUrl: './supplier-tenders.component.html',
  styleUrls: ['./supplier-tenders.component.css']
})
export class SupplierTendersComponent implements OnInit {

  constructor(private router: Router, private supplierService: SupplierService, private authService: AuthService) { }

  publicTenderArr: publicTender[] = [];
  
  privateTenderArr: PrivateTender[] = [];

  supplierInfo: Supplier;

  ngOnInit(): void {
    const login = new Login();
    login.companyCode = sessionStorage.getItem('user');
    login.password = sessionStorage.getItem('password');
    // this.authService.GetLogin(login)
    // .subscribe((data) => {
    //   this.supplierInfo = data;
    // }).add(
    //   this.supplierService.getPublicTenders(this.supplierInfo.id)
    //   .subscribe((data) => {
    //     // console.log(data);
    //     this.publicTenderArr = data;
    //   })
    // ).add(
    //   this.supplierService.getPrivateTenders(this.supplierInfo.id)
    //   .subscribe((data) => {
    //     this.privateTenderArr = data;
    //   })
    // });
    
    // this.authService.GetLogin(login)
    // .pipe()


    this.authService.GetLogin(login)
    .subscribe((data) => {
      if(data != null){
        this.supplierInfo = data;
        this.getSupplierPublicTenders(this.supplierInfo.id);
        this.getSupplierPrivateTenders(this.supplierInfo.id);
      }
    });
  }

  getSupplierPublicTenders(id: number) {
    this.supplierService.getPublicTenders(id)
    .subscribe((data) => {
      this.publicTenderArr = data;
      console.log(data);
    })
  }

  getSupplierPrivateTenders(id: number) {
    this.supplierService.getPrivateTenders(id)
    .subscribe((data) => {
      this.privateTenderArr = data;
      console.log(data);
    })
  }
}
