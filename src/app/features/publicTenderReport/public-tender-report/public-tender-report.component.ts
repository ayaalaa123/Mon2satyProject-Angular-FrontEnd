import { publicTender } from './../../../models/publicTender';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { PublicTenderService } from 'src/app/service/public-tender.service';
// import { Supplier } from 'src/app/models/Supplier';

// @Component({
//   selector: 'app-public-tender-report',
//   templateUrl: './public-tender-report.component.html',
//   styleUrls: ['./public-tender-report.component.css'],
// })
// export class PublicTenderReportComponent implements OnInit {
//   suppliersarr: Supplier[];
//   constructor(
//     public ar: ActivatedRoute,
//     public r: Router,
//     private pupTendersser: PublicTenderService
//   ) {}
//   id: number = this.ar.snapshot.params['id'];

//   ngOnInit(): void {
//     console.log(this.id);
//     this.pupTendersser.getReportPublicTender(this.id).subscribe((data) => {
//       console.log(data);
//       this.suppliersarr = data;
//     });
//   }
// }







import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicTenderService } from 'src/app/service/public-tender.service';
import { Supplier } from 'src/app/models/Supplier';

@Component({
  selector: 'app-public-tender-report',
  templateUrl: './public-tender-report.component.html',
  styleUrls: ['./public-tender-report.component.css'],
})
export class PublicTenderReportComponent implements OnInit {
  suppliersarr: Supplier[];
  supplierchoosen = new Supplier();
  constructor(
    public ar: ActivatedRoute,
    public r: Router,
    private pupTendersser: PublicTenderService
  ) {}
  id: number = this.ar.snapshot.params['id'];
  suppId = this.ar.snapshot.params['publicTenderID'];

  ngOnInit(): void {
    console.log(this.id);
    console.log(this.suppId);
    this.pupTendersser.getReportPublicTender(this.id).subscribe((data) => {
      console.log(data);
      this.suppliersarr = data.suppliers;
      this.supplierchoosen = data.supplier;
      console.log(this.supplierchoosen);
    });
  }

  assignSupplierToPublicTender(supplierID: number) {
    // this.supplierchoosen.id = supId;
    // console.log(this.supplierchoosen);
    // this.pupTendersser
    //   .assignSupplier(this.suppId, this.id)
    //   .subscribe((deta) => {
    //     console.log(deta);
    //   });
    
    const publicTenderObj = new publicTender();
    publicTenderObj.id = this.id;
    publicTenderObj.supplierID = supplierID;
    // console.log(publicTenderObj);
    this.pupTendersser.assignSupplier(publicTenderObj)
    .subscribe((data) => {
      console.log(data);
    })
  }
}
