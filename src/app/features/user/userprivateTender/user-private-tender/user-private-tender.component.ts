import { Component, OnInit } from '@angular/core';
import { PrivateTender } from 'src/app/models/privateTender';
import { Supplier } from 'src/app/models/Supplier';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { SupplierTenderServiceService } from 'src/app/service/supplier-tender-service.service';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-user-private-tender',
  templateUrl: './user-private-tender.component.html',
  styleUrls: ['./user-private-tender.component.css'],
})
export class UserPrivateTenderComponent implements OnInit {
  supplierPrivateTenders: PrivateTender[] = [];

  supplier: Supplier = new Supplier();

  constructor(
    private supplierTendersService: SupplierTenderServiceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('from user private tender');

    var login = new Login();
    login.companyCode = sessionStorage.getItem('user');
    login.password = sessionStorage.getItem('password');

    this.authService.GetLogin(login).subscribe((data) => {
      this.supplier = data;
      // console.log(data);
      this.getPrivateTenders();
    });
  }
  getPrivateTenders() {
    // console.log(this.supplier.id);
    this.supplierTendersService
      .getPrivateTenders(this.supplier.id)
      .subscribe((data) => {
        this.supplierPrivateTenders = data;
        console.log(data);
      });
  }
}
