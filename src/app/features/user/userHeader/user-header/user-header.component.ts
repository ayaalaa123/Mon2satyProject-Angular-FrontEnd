import { SupplierTenderServiceService } from './../../../../service/supplier-tender-service.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { Supplier } from 'src/app/models/Supplier';
@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent implements OnInit {
  // constructor(private authService: AuthService, private router: Router) {}

  // ngOnInit(): void {
  //   if (
  //     sessionStorage.getItem('isAuth') == 'true' &&
  //     sessionStorage.getItem('isUser') == 'true'
  //   ) {
  //     this.router.navigate(['/Supplier']);
  //   } else if (
  //     sessionStorage.getItem('isAuth') == 'true' &&
  //     sessionStorage.getItem('isManager') == 'true'
  //   ) {
  //     this.router.navigate(['/admin']);
  //   } else {
  //     this.router.navigate(['/login']);
  //   }
  // }

  userSupplier: Supplier = new Supplier();

  userLogin: Login = new Login();
  constructor(private authService: AuthService, private router: Router,
    private supplierTenders: SupplierTenderServiceService) { }

  ngOnInit() {

    if (sessionStorage.getItem('isAuth') != 'true') {
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem('isManager') == 'true') {
      this.router.navigate(['/admin']);
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
