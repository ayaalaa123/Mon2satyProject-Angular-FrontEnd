import { SupplierApplyForTender } from './../../../../models/supplierApplyForTender';
import { SupplierService } from 'src/app/service/supplier.service';
import { AuthService } from 'src/app/service/auth.service';
import { SupplierTenderServiceService } from './../../../../service/supplier-tender-service.service';
import { Component, OnInit } from '@angular/core';
import { publicTender } from 'src/app/models/publicTender';
import { PostService } from 'src/app/service/post.service';
import { PublicTenderService } from 'src/app/service/public-tender.service';
import { Supplier } from 'src/app/models/Supplier';
import { SubCategory } from 'src/app/models/SubCategory';
import { Login } from 'src/app/models/Login';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-user-public-tender',
  templateUrl: './user-public-tender.component.html',
  styleUrls: ['./user-public-tender.component.css'],
})
export class UserPublicTenderComponent implements OnInit {
  constructor(
    private pstser: PostService,
    private pupser: PublicTenderService,
    private supplierTendersService: SupplierTenderServiceService,
    private authService: AuthService,
    private supplierService: SupplierService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  navigationSubscription;

  supplier: Supplier = new Supplier();
    
    subCat: SubCategory = new SubCategory();

    supplierPublicTenders: SupplierApplyForTender[] = [];
    
    pubtendersArr: publicTender[];

  ngOnInit(): void {

    var login = new Login();
        login.companyCode = sessionStorage.getItem('user');
        login.password = sessionStorage.getItem('password');

        this.authService.GetLogin(login)
        .subscribe((data) => {
            this.supplier = data;
            this.getPublicTender();
        });
  }

  getPublicTender() {
    this.supplierTendersService.getPublicTenders(this.supplier.id)
    .subscribe((data) => {
        console.log(data);
        this.supplierPublicTenders = data;
    })
  }

  applyForTender(tenderID: number) {
    console.log(tenderID + " " + this.supplier.id);
    let supplierTender = new SupplierApplyForTender();
    supplierTender.supplierID = this.supplier.id;
    supplierTender.publicTenderID = tenderID;

    console.log(supplierTender);

    this.supplierService.supplierApplyForTender(supplierTender)
    .subscribe((data) => {
      console.log(data);
      if(data.supplier != null && data.publicTender != null) {
        alert("لقد قدمت بالفعل ");
      }
      else {
        alert("تم التقديم ");
      }
  
      this.router.navigate(['/Supplier/userPublicTender']);

    });
  }
}
