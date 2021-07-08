import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PtivatetenderserviceService } from 'src/app/service/ptivatetenderservice.service';
import { Supplier } from 'src/app/models/Supplier';

@Component({
  selector: 'app-private-tender-report',
  templateUrl: './private-tender-report.component.html',
  styleUrls: ['./private-tender-report.component.css']
})
export class PrivateTenderReportComponent implements OnInit {
  suppliersarr: Supplier[];
  supplierchoosen = new Supplier();
  id: number = this.ar.snapshot.params['id'];
  suppId = this.ar.snapshot.params['privateTenderID'];
  p: number = 1;
  constructor(
    public ar: ActivatedRoute,
    public r: Router,
    private privTendersser: PtivatetenderserviceService
  ) {}

  ngOnInit(): void {
    console.log(this.id);
    //console.log(this.suppId);
    this.privTendersser.getReport(this.id).subscribe((data) => {
      console.log(data);
      this.suppliersarr = data.suppliers;
      //this.tenderDiscriptin = this.suppliersarr[1];
      this.supplierchoosen = data.supplier;
      console.log(this.supplierchoosen);
    });
  }

}
