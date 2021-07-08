import { Router } from '@angular/router';
import { SubCategoryService } from './../../../service/sub-category.service';
import { SubCategory } from './../../../models/SubCategory';
import { NewSupplier } from 'src/app/models/NewSupplier';
import { NewSupplierService } from 'src/app/service/new-supplier.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-new-supplier-data',
  templateUrl: './edit-new-supplier-data.component.html',
  styleUrls: ['./edit-new-supplier-data.component.css']
})
export class EditNewSupplierDataComponent implements OnInit {

  constructor(private newSupplierService: NewSupplierService, private subCatSer: SubCategoryService, private router: Router) { }

  newSupplier: NewSupplier = new NewSupplier();
  subCat: SubCategory[];
  
  ngOnInit(): void {


    this.subCatSer.getSubCategory().subscribe((data) => {
      this.subCat = data;
      console.log(data);
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

  getRegisteredData(supplierForm: NgForm) {
    // console.log(supplierForm);
    this.newSupplier.password = supplierForm.value.password;
    this.newSupplier.companyName = supplierForm.value.companyName;
    this.newSupplier.email = supplierForm.value.email;
    console.log(this.newSupplier);
    this.newSupplierService.updateRegistered(this.newSupplier)
    .subscribe((data) => {
      console.log(data);
      this.newSupplier = data;
      console.log(this.newSupplier);
    });
  }

  onSubmitSupplier(supplierForm: NgForm) {
    console.log(supplierForm.value);
    console.log(this.newSupplier);
    this.newSupplierService.updateRegistered(this.newSupplier)
    .subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['/home']);
  }
}
