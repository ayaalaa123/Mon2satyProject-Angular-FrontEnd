import { Component, OnInit } from '@angular/core';
import {publicTender} from 'src/app/models/publicTender';
import {PublicTenderService}from '../../../../service/public-tender.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-public-admin',
  templateUrl: './public-admin.component.html',
  styleUrls: ['./public-admin.component.css']
})
export class PublicAdminComponent implements OnInit {
  // pulicTenders:publicTender[];

  // constructor(private pubService:PublicTenderService) { }

  // ngOnInit(): void {
  //   this.pubService.getTender().subscribe((data=>{
  //     this.pulicTenders=data;
  //     console.log(data);
  //   }));


  pulicTenders:publicTender[];

  constructor(private pubService:PublicTenderService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
   }
   navigationSubscription;
  ngOnInit(): void {
    this.pubService.getTender().subscribe((data=>{
      this.pulicTenders=data;
      console.log(data);
    }));
  }
  }


