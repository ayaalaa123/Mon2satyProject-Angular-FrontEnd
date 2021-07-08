import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/Supplier';
import { PublicTenderService } from 'src/app/service/public-tender.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicTendersSuppliersViewModel } from 'src/app/models/PublicTendersSuppliersViewModel';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css'],
})
export class SupplierComponent implements OnInit {
  supplierarr: PublicTendersSuppliersViewModel[];
  p: number = 1;

  constructor(
    private publictenderreportser: PublicTenderService,
    public ar: ActivatedRoute,

    public r: Router
  ) {}

  ngOnInit(): void {
    const id: number = this.ar.snapshot.params['id'];
    this.publictenderreportser.getSuppliers(id).subscribe((data) => {
      console.log(data);
      this.supplierarr = data.suppliers;
    });
  }
}
