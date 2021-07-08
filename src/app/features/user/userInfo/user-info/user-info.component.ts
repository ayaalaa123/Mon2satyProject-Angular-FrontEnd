import { AuthService } from './../../../../service/auth.service';
import { Login } from './../../../../models/Login';
import { Component, OnInit } from '@angular/core';
import { SupplierTelephoneFax } from 'src/app/models/SupplierTelphoneFax';
import { SubCategory } from 'src/app/models/SubCategory';
import { SupplierService } from 'src/app/service/supplier.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  nstd:SupplierTelephoneFax=new SupplierTelephoneFax();
  subCats: SubCategory[] = [];
  userLogin: Login = new Login();

  constructor(private suppSer:SupplierService ,
    public ar: ActivatedRoute,
    public r: Router,
    private authServie: AuthService) { }

  ngOnInit(): void {

    this.userLogin.companyCode = sessionStorage.getItem('user');
    this.userLogin.password = sessionStorage.getItem('password');

    this.authServie.GetUserInfo(this.userLogin)
    .subscribe((data) => {
      this.nstd=data;
      console.log(data);
    });


  //   const id: number = this.ar.snapshot.params['id'];
  //   console.log(id);

  //  this.suppSer.getSupplierById(id).subscribe((response) => {
  //      console.log(response);
  //      // console.log(this.nstd);
  //      this.nstd = response;
  //      if(response == null)
  //      {
  //          this.r.navigate(['/suppliers']);
  //      }
  //  });


  }


   
  onSubmitSupplier(supplierForm: NgForm) {
    
    const newsuptelfax: SupplierTelephoneFax = {
      supplier: {
        id: supplierForm.value.id,
        address: supplierForm.value.address,
        companyName: supplierForm.value.companyName,
        password: supplierForm.value.password,
        managerName: supplierForm.value.managerName,
        managerPhone: supplierForm.value.managerPhone,
        email: supplierForm.value.email,
        legalPaperwork: supplierForm.value.legalPaperwork,
        infoPaperwork: supplierForm.value.infoPaperwork,
        companyCode: supplierForm.value.companyCode,
      },

      // companyCode: supplierForm.value.companyCode,
      supplierFax: supplierForm.value.supplierFax,

      supplierPhone: supplierForm.value.supplierPhone,
      
      // [supplierForm.value.subCategoryID]
      subCategories: this.subCats,
      
    };
    
  
    this.suppSer.editSupplier(this.nstd)
    .subscribe((data) => {
      console.log(data);
      alert("Updated Done");
      this.r.navigate(['/Supplier']);
    });

    
    
   
  }
}
