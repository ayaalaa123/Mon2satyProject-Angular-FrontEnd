// import { Supplier } from './../../../models/Supplier';
// import { NewSupplier } from './../../../models/NewSupplier';
// import { NewSupplierService } from './../../../service/new-supplier.service';
// import { Component, OnInit } from '@angular/core';
// import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
// import { SubCategoryService } from 'src/app/service/sub-category.service';
// import { SubCategory } from 'src/app/models/SubCategory';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute, Router } from '@angular/router';
// import { SupplierTelephoneFax } from 'src/app/models/SupplierTelphoneFax';
// import { SupplierService } from 'src/app/service/supplier.service';

// @Component({
//   selector: 'app-userdataforeditanddetails',
//   templateUrl: './userdataforeditanddetails.component.html',
//   styleUrls: ['./userdataforeditanddetails.component.css'],
// })
// export class UserdataforeditanddetailsComponent implements OnInit {
//   subCat: SubCategory[];
//   nstd: NewSupplier = new NewSupplier();
//   newsuoarr: NewSupplier[];
//   companyCode: string;
//   subcatobj: SubCategory = new SubCategory();

//   suptelfax: SupplierTelephoneFax;
//   supplierobj: Supplier;
//   subCats: SubCategory[] = [];

//   registerForm: FormGroup;
//   // Define and subcategory array for the supplier

//   get companyName() {
//     return this.registerForm.get('companyName');
//   }

//   get companyEmail() {
//     return this.registerForm.get('companyEmail');
//   }

//   constructor(
//     private supplierSer: NewSupplierService,
//     private subCatSer: SubCategoryService,
//     private http: HttpClient,
//     public ar: ActivatedRoute,
//     private supser: SupplierService,
//     public r: Router
//   ) {}

//   ngOnInit() {
//     const id: number = this.ar.snapshot.params['id'];
//     console.log(id);
//     //getnewsupplierbyid
//     this.supplierSer.GetnewSupplierById(id).subscribe((response) => {
//       console.log(response);
//       const templateObj = response;
//       this.nstd = response;
      
      
//       console.log(templateObj);
//       // this.nstd.companyName = templateObj.companyName;
//       // this.nstd.address = templateObj.address;
//       // this.nstd.email = templateObj.email;
//       // this.nstd.fax = templateObj.fax;
//       // this.nstd.infoPaperwork = templateObj.infoPaperwork;
//       // this.nstd.legalPaperwork = templateObj.legalPaperwork;
//       // this.nstd.managerName = templateObj.managerName;
//       // this.nstd.managerPhone = templateObj.managerPhone;
//       // this.nstd.password = templateObj.password;
//       // this.nstd.phone = templateObj.phone;
//       // this.nstd.subCategoryID = templateObj.subCategoryID;

//       // var json = this.supplierSer.GetnewSupplierById(id);
//       // console.log(json);

//       // console.log(supplierForm.value);
//       //this.newsupp=this.supplierSer.getsupplier(this.id);
//     });

//     this.registerForm = new FormGroup({
//       companyName: new FormControl('', [
//         Validators.required,
//         Validators.minLength(4),
//       ]),
//       companyEmail: new FormControl('', [
//         Validators.email,
//         Validators.required,
//       ]),
//     });
//   }

//   onSubmitSupplier(supplierForm: NgForm) {
//     // Define A new object from supplier class
//     var subcatID = parseInt(supplierForm.value.subCategoryID);
//     console.log(supplierForm.value.subCategoryID);

//     this.subcatobj.ID = subcatID;
//     this.subCats.push(this.subcatobj);

//     // for( var i = 0; i < supplierForm.value.subCategoryID.length; i++){
//     //   subCats.push(this.subcatobj);
//     //   subCats[i].ID = (supplierForm.value.subCategoryID[i]);
//     // }

//     const newsuptelfax: SupplierTelephoneFax = {
//       supplier: {
//         address: supplierForm.value.address,
//         companyName: supplierForm.value.companyName,
//         password: supplierForm.value.password,
//         managerName: supplierForm.value.managerName,
//         managerPhone: supplierForm.value.managerPhone,
//         email: supplierForm.value.email,
//         legalPaperwork: supplierForm.value.legalPaperwork,
//         infoPaperwork: supplierForm.value.infoPaperwork,
//         companyCode: supplierForm.value.companyCode,
//       },

//       // companyCode: supplierForm.value.companyCode,
//       SupplieFax: supplierForm.value.supplierFax,

//       SupplierPhone: supplierForm.value.supplierPhone,
//       // [supplierForm.value.subCategoryID]
//       subCategories: this.subCats,
//     };
//     console.log(this.suptelfax);

//     this.supser.addSupplier(newsuptelfax).subscribe((data) => {
//       console.log(data);
//       this.r.navigate(['/suppliers']);

//       // this.supplierSer.deleteCurrentSupplier(newsuptelfax.supplier.id);
//     });
  
//     console.log(newsuptelfax);

//     // this.publicTenderser.addTender(this.pubobj)
//     // .subscribe(data => {console.log(data)});
//     //  console.log(formData);
//   }

//   //  newsupp= this.supplierSer
//   //     .getsupplier(this.id).subscribe(data=>{
//   //       console.log(data);
//   //     })
// }



import { Supplier } from './../../../models/Supplier';
import { NewSupplier } from './../../../models/NewSupplier';
import { NewSupplierService } from './../../../service/new-supplier.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { SubCategoryService } from 'src/app/service/sub-category.service';
import { SubCategory } from 'src/app/models/SubCategory';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SupplierTelephoneFax } from 'src/app/models/SupplierTelphoneFax';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-userdataforeditanddetails',
  templateUrl: './userdataforeditanddetails.component.html',
  styleUrls: ['./userdataforeditanddetails.component.css'],
})
export class UserdataforeditanddetailsComponent implements OnInit {
  data: any = {};
  subCat: SubCategory[];
  nstd: NewSupplier = new NewSupplier();
  newsuoarr: NewSupplier[];
  companyCode: string;
  subcatobj: SubCategory = new SubCategory();

  suptelfax: SupplierTelephoneFax;
  supplierobj: Supplier;
  subCats: SubCategory[] = [];

  registerForm: FormGroup;
  // Define and subcategory array for the supplier

  get companyName() {
    return this.registerForm.get('companyName');
  }

  get companyEmail() {
    return this.registerForm.get('companyEmail');
  }

  constructor(
    private supplierSer: NewSupplierService,
    private subCatSer: SubCategoryService,
    private http: HttpClient,
    public ar: ActivatedRoute,
    private supser: SupplierService,
    public r: Router
  ) {}

  ngOnInit() {
    const id: number = this.ar.snapshot.params['id'];
    console.log(id);
    //getnewsupplierbyid
    this.supplierSer.GetnewSupplierById(id).subscribe((response) => {
      console.log(response);
      this.nstd = response;
      console.log(this.nstd);
      // const templateObj = response;
      // console.log(templateObj);
      // this.nstd.companyName = templateObj.companyName;
      // this.nstd.address = templateObj.address;
      // this.nstd.email = templateObj.email;
      // this.nstd.fax = templateObj.fax;
      // this.nstd.infoPaperwork = templateObj.infoPaperwork;
      // this.nstd.legalPaperwork = templateObj.legalPaperwork;
      // this.nstd.managerName = templateObj.managerName;
      // this.nstd.managerPhone = templateObj.managerPhone;
      // this.nstd.password = templateObj.password;
      // this.nstd.phone = templateObj.phone;
      // this.nstd.subCategoryID = templateObj.subCategoryID;

      // var json = this.supplierSer.GetnewSupplierById(id);
      // console.log(json);

      // console.log(supplierForm.value);
      //this.newsupp=this.supplierSer.getsupplier(this.id);
    });

    this.registerForm = new FormGroup({
      companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      companyEmail: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
    });
  }

  onSubmitSupplier(supplierForm: NgForm) {
    // Define A new object from supplier class
    var subcatID = parseInt(supplierForm.value.subCategoryID);
    console.log(supplierForm.value.subCategoryID);

    this.subcatobj.ID = subcatID;
    this.subCats.push(this.subcatobj);

    // for( var i = 0; i < supplierForm.value.subCategoryID.length; i++){
    //   subCats.push(this.subcatobj);
    //   subCats[i].ID = (supplierForm.value.subCategoryID[i]);
    // }

    const newsuptelfax: SupplierTelephoneFax = {
      supplier: {
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
    // console.log(this.suptelfax);

    // this.supser.addSupplier(newsuptelfax).subscribe((data) => {
    //   console.log(data);
    //   this.r.navigate(['/suppliers']);

    //   // this.supplierSer.deleteCurrentSupplier(newsuptelfax.supplier.id);
    // });
  
    this.supser.confirmNewSupplier(this.nstd)
    .subscribe((data) => {
      console.log(data);
    });
    this.r.navigate(['/admin/suppliers']);
    // console.log(newsuptelfax);

    // this.publicTenderser.addTender(this.pubobj)
    // .subscribe(data => {console.log(data)});
    //  console.log(formData);
  }

  //  newsupp= this.supplierSer
  //     .getsupplier(this.id).subscribe(data=>{
  //       console.log(data);
  //     })
}
