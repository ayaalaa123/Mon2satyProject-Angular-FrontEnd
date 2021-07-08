import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PtivatetenderserviceService } from 'src/app/service/ptivatetenderservice.service';
import { privateTendersSupplierViewModel } from 'src/app/models/privateTendersSupplierViewModel';

@Component({
  selector: 'app-private-tenders',
  templateUrl: './private-tenders.component.html',
  styleUrls: ['./private-tenders.component.css'],
})
export class PrivateTendersComponent implements OnInit {
  publictendersarr: privateTendersSupplierViewModel[];
  constructor(
    private privatetenderreportser: PtivatetenderserviceService,
    public ar: ActivatedRoute,

    public r: Router
  ) {}

  ngOnInit(): void {
    const id: number = this.ar.snapshot.params['id'];
    this.privatetenderreportser
      .getprivatetendersreport(id)
      .subscribe((data) => {
        console.log(data);
        this.publictendersarr = data;
      });
  }
}
