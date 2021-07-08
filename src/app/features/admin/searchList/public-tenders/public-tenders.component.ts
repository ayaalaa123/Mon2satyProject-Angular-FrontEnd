import { Component, OnInit } from '@angular/core';
import { PublicTenderService } from 'src/app/service/public-tender.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PublicTendersSuppliersViewModel } from 'src/app/models/PublicTendersSuppliersViewModel';

@Component({
  selector: 'app-public-tenders',
  templateUrl: './public-tenders.component.html',
  styleUrls: ['./public-tenders.component.css'],
})
export class PublicTendersComponent implements OnInit {
  publictendersarr: PublicTendersSuppliersViewModel[];
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
      this.publictendersarr = data.publicTenders;
    });
  }
}
