import { Supplier } from './../../../models/Supplier';
import { NewSupplier } from './../../../models/NewSupplier';
import { NewSupplierService } from './../../../service/new-supplier.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { SubCategoryService } from 'src/app/service/sub-category.service';
import { SubCategory } from 'src/app/models/SubCategory';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeComponent } from 'src/app/Features/home/home.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  data: any = {};
  subCat: SubCategory[];
  nstd: NewSupplier = new NewSupplier();
  newsuoarr: NewSupplier[];

  constructor(
    private supplierSer: NewSupplierService,
    private subCatSer: SubCategoryService,
    public r: Router,
    private http: HttpClient,
    public ar: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subCatSer.getSubCategory().subscribe((data) => {
      this.subCat = data;
      console.log(data);
      this.supplierSer
        .getnewsuppliers()
        .subscribe((data) => (this.newsuoarr = data));
      const id: number = this.ar.snapshot.params['id'];
      console.log(id);
      //getnewsupplierbyid
      this.supplierSer.GetnewSupplierById(id).subscribe((response) => {
        console.log(response);
        const templateObj = response;
        console.log(templateObj);
        this.nstd.companyName = templateObj.companyName;
        this.nstd.address = templateObj.address;
        this.nstd.email = templateObj.email;
        this.nstd.fax = templateObj.fax;
        this.nstd.infoPaperwork = templateObj.infoPaperwork;
        this.nstd.legalPaperwork = templateObj.legalPaperwork;
        this.nstd.managerName = templateObj.managerName;
        this.nstd.managerPhone = templateObj.managerPhone;
        this.nstd.password = templateObj.password;
        this.nstd.phone = templateObj.phone;
        this.nstd.subCategoryID = templateObj.subCategoryID;
      });

      // var json = this.supplierSer.GetnewSupplierById(id);
      // console.log(json);

      // console.log(supplierForm.value);
      //this.newsupp=this.supplierSer.getsupplier(this.id);
    });

    var acc = document.getElementsByClassName('accordion');
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    }
  }

  onSubmitSupplier(supplierForm: NgForm) {
    // Define A new object from supplier class
    const newSup: NewSupplier = {
      address: supplierForm.value.address,
      // companyCode: supplierForm.value.companyCode,
      companyName: supplierForm.value.companyName,
      password: supplierForm.value.password,
      managerName: supplierForm.value.managerName,
      managerPhone: supplierForm.value.managerPhone,
      email: supplierForm.value.email,
      legalPaperwork: supplierForm.value.legalPaperwork,
      infoPaperwork: supplierForm.value.infoPaperwork,
      fax: supplierForm.value.supplierFax,
      phone: supplierForm.value.supplierPhone,
      subCategoryID: parseInt(supplierForm.value.subCategories),
      companyCode: '',
    };

    this.supplierSer
      .addNewSupplier(newSup)
      .subscribe((deta) => console.log(deta));

    var confirmedBtn = confirm('تم تسجيل دخولك بنجاح');
    if (confirmedBtn == true) this.r.navigate(['/home']);

    console.log(newSup);

    // this.publicTenderser.addTender(this.pubobj)
    // .subscribe(data => {console.log(data)});
     console.log(supplierForm.value);
  }

  //  newsupp= this.supplierSer
  //     .getsupplier(this.id).subscribe(data=>{
  //       console.log(data);
  //     })
}
