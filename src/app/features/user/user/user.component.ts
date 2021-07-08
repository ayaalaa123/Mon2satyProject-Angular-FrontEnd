import { SupplierTenderServiceService } from './../../../service/supplier-tender-service.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/Supplier';
import { Login } from 'src/app/models/Login';
import { SubCategory } from 'src/app/models/SubCategory';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@Injectable()

export class UserComponent implements OnInit {

  userSupplier: Supplier = new Supplier();

  userLogin: Login = new Login();
  constructor(private authService: AuthService, private router: Router,
    private supplierTenders: SupplierTenderServiceService) { }

  ngOnInit() {

    if (sessionStorage.getItem('isAuth') != 'true') {
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem('isManager') == 'true') {
      this.router.navigate(['/login']);
    }
    else {
      this.userLogin.companyCode = sessionStorage.getItem('user');
      this.userLogin.password = sessionStorage.getItem('password');

      this.authService.GetLogin(this.userLogin)
        .subscribe((data) => {
          this.userSupplier = data;
          //   console.log(data);
        });

    }
  }
}