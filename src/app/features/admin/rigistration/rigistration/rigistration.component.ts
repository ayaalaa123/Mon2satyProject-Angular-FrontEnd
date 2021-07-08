import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/SubCategory';
import { NewSupplierService } from 'src/app/service/new-supplier.service';
import { SupplierService } from 'src/app/service/supplier.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SubCategoryService } from 'src/app/service/sub-category.service';
import { NgForm } from '@angular/forms';
import { SupplierTelephoneFax } from 'src/app/models/SupplierTelphoneFax';
import { NewSupplier } from 'src/app/models/NewSupplier';
declare var jQuery:any
@Component({
  selector: 'app-rigistration',
  templateUrl: './rigistration.component.html',
  styleUrls: ['./rigistration.component.css']
})
export class RigistrationComponent implements OnInit {
  subCat: SubCategory[];
  // newsup= new SupplierTelFaxViewModel();
  newsuoarr: NewSupplier[];
  subCats: SubCategory[] = [];
  subcatobj: SubCategory = new SubCategory();
  data: any = {};
  constructor(
    private supplierSer: NewSupplierService,
    private supser: SupplierService,
    private subCatSer: SubCategoryService,
    public r: Router,
    private http: HttpClient,
    public ar: ActivatedRoute
  ) {}

  ngOnInit() {
     //////////////////////////////////Modal
     (function name($) {
      $(document).ready(function () {
        $('#myBtn').on('click', function () {
          $('#myModal').css('display', 'block');
        });
        $('.close').on('click', function () {
          $('#myModal').hide();
        });
        $(window).click(function (e) {
          if (e.target == $('#myModal')) {
            $('#myModal').hide();
          }
        });
        $('#cancel').click(function () {
          $('#myModal').hide();
        });
        $('#btnok').on('click', function () {
          $('#myModal').hide();
        });

        // $('#btnok').on('click', function () {
        //   this.functionModal();
        // });
      });
    })(jQuery);
     this.subCatSer.getSubCategory().subscribe((data) => {
      this.subCat = data;
      console.log(data);
      this.supplierSer
        .getnewsuppliers()
        .subscribe((data) => (this.newsuoarr = data));
      const id: number = this.ar.snapshot.params['id'];
      console.log(id);
      //getnewsupplierbyid
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
    var subcatID = parseInt(supplierForm.value.subCategories);
    console.log(supplierForm.value.subCategories);

    this.subcatobj.ID = subcatID;
    this.subCats.push(this.subcatobj);
    // Define A new object from supplier class
    const newsup: SupplierTelephoneFax = {
      supplier: {
        companyName: supplierForm.value.companyName,
        address: supplierForm.value.address,
        companyCode: supplierForm.value.companyCode,
        password: supplierForm.value.password,
        managerName: supplierForm.value.managerName,
        managerPhone: supplierForm.value.managerPhone,
        email: supplierForm.value.email,
        legalPaperwork: supplierForm.value.legalPaperwork,
        infoPaperwork: supplierForm.value.infoPaperwork,
      },
    supplierFax: supplierForm.value.supplierFax,
      supplierPhone: supplierForm.value.supplierPhone,
      subCategories: this.subCats,
    };
    console.log(newsup);
    this.supser.addSupplierAdmin(newsup).subscribe((deta) => console.log(deta));
    this.r.navigate(['/admin/suppliers']);

    //  var confirmedBtn = confirm('تم تسجيل دخولك بنجاح');
    // if (confirmedBtn == true)
  }
  ////////////////////////////////Modal

  functionModal() {
    this.r.navigate(['/admin/SuppliersInThisSubcatogries/']);
  }


}
