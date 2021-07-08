import { PrivateTender } from './../../../models/privateTender';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { publicTender } from 'src/app/models/publicTender';
import { ActivatedRoute, Router } from '@angular/router';
import { PtivatetenderserviceService } from 'src/app/service/ptivatetenderservice.service';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-assign-supplier-to-private-tender',
  templateUrl: './assign-supplier-to-private-tender.component.html',
  styleUrls: ['./assign-supplier-to-private-tender.component.css']
})
export class AssignSupplierToPrivateTenderComponent implements OnInit {
  supplierName: string;
  pubObj = new PrivateTender();
  constructor(
    public ar: ActivatedRoute,
    private puptenderser: PtivatetenderserviceService,
    private supse: SupplierService,
    private router: Router
  ) {}
  id: number = this.ar.snapshot.params['id'];
  tenderId = this.ar.snapshot.params['privateTenderID'];

  ngOnInit(): void {
    this.puptenderser.getTenderById(this.tenderId).subscribe((deta) => {
      console.log(deta);
      this.pubObj.date = deta.date;
      this.pubObj.brochure = deta.brochure;
      this.pubObj.id = deta.id;
      this.pubObj.subCategoryID = deta.subCategoryID;
      
    });
    this.supse.getSupplierById(this.id).subscribe((deta) => {
      console.log(deta);
      this.supplierName = deta.supplier.companyName;
    });
  }
  onSubmit(f: NgForm) {
    this.pubObj.supplierID = this.id;
    console.log(this.pubObj);
    var choose = confirm('هل انت متاكد من اختيارك');
    if (choose == true) {
      this.puptenderser.assinSupplier(this.pubObj).subscribe((deta) => {
        console.log(deta);
        this.router.navigate(['admin']);
      });
    }

}
}