import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { SupplierService } from './../../../service/supplier.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/Supplier';
import { Login } from 'src/app/models/Login';
declare var jQuery: any;

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css'],
})
export class UsersDataComponent implements OnInit {
  suppliers: Supplier[];
  p: number = 1;
  // // paging
  // config: any;
  // collection = { count: 60, Supplier: [] };

  // // paging
  constructor(private supplierSer: SupplierService, private authService: AuthService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  navigationSubscription;

  ngOnInit(): void {
    // Get suppliers In the console
    var result = this.supplierSer.getSuppliers().subscribe((data) => {
      this.suppliers = data;
      console.log(data);
    });
    //search
    (function ($) {
      $(document).ready(function () {
        $('#myInput').on('keyup', function () {
          var value = $(this).val().toLowerCase();
          $('#myTable tr').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          });
        });
      });
    })(jQuery);

   
  }
  onClickMe(){
    console.log("hi");
  }

  onSusspended(code: string){
    let login = new Login();
    login.companyCode = code;
    if(confirm("هل أنت متأكد من حظر هذا المورد؟؟!")) {
      this.authService.Susspended(login)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/admin/suppliers']);
      });
    }
  }

  onUnSusspended(code: string) {
    let login = new Login();
    login.companyCode = code;
    if(confirm("هل أنت متأكد من فك الحظر عن هذا المورد؟!!")) {
      this.authService.Susspended(login)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/admin/suppliers']);
      });
    }
  }
}

