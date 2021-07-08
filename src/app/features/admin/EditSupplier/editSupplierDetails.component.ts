import { SupplierTelephoneFax } from 'src/app/models/SupplierTelphoneFax';
import { SupplierService } from 'src/app/service/supplier.service';
import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/Supplier';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SubCategory } from 'src/app/models/SubCategory';

@Component({
    templateUrl: './editSupplierDetails.component.html',
    selector: 'editSupplier'
})

export class EditSupplierComponent implements OnInit {

    // nstd:Supplier=new Supplier();
    nstd:SupplierTelephoneFax=new SupplierTelephoneFax();
    subCats: SubCategory[] = [];
    constructor(private suppSer:SupplierService ,
        public ar: ActivatedRoute,
        public r: Router){}
    ngOnInit(): void {
        const id: number = this.ar.snapshot.params['id'];
         console.log(id);

        this.suppSer.getSupplierById(id).subscribe((response) => {
            console.log(response);
            // console.log(this.nstd);
            this.nstd = response;
            if(response == null)
            {
                this.r.navigate(['/suppliers']);
            }
        });



        
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
    });

    this.r.navigate(['/admin']);
   
  }
}



