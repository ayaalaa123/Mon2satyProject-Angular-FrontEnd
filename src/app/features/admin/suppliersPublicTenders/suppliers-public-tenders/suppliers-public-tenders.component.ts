import { Router, NavigationEnd } from '@angular/router';
import { SupplierApplyForTender } from './../../../../models/supplierApplyForTender';
import { PublicTenderService } from 'src/app/service/public-tender.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suppliers-public-tenders',
  templateUrl: './suppliers-public-tenders.component.html',
  styleUrls: ['./suppliers-public-tenders.component.css']
})
export class SuppliersPublicTendersComponent implements OnInit {

  constructor(private publicTenderService: PublicTenderService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
   }

  suppliersPublicTenders: SupplierApplyForTender[] = [];
  navigationSubscription;

  ngOnInit(): void {


    
    this.publicTenderService.getSuppliersPublicTenders()
    .subscribe((data) => {
      this.suppliersPublicTenders = data;
      console.log(data);
      
    });

  }


  onSupplierPay(supplierID: number, tenderID: number) {
    // console.log(supplierID + " " + tenderID);
    let supplierTender = new SupplierApplyForTender();
    supplierTender.supplierID = supplierID;
    supplierTender.publicTenderID = tenderID;
    // console.log(supplierTender);
    this.publicTenderService.getConfirmationForPayment(supplierTender)
    .subscribe((data) => {
      console.log(data);
      this.router.navigate(['admin/supplierPublicTenders']);
      
    });
  }

}
