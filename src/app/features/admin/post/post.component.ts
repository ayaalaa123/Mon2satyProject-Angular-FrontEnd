import { SubCategory } from 'src/app/models/SubCategory';
import { PublicTendersComponent } from './../searchList/public-tenders/public-tenders.component';
import { Router, NavigationEnd } from '@angular/router';
import { publicTender } from './../../../models/publicTender';
import { SubCategoryService } from './../../../service/sub-category.service';
import { Supplier } from './../../../models/Supplier';

import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

import { PublicTenderService } from '../../../service/public-tender.service';

// import {  Posts } from 'src/app/models/posts';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  // post:Posts[]; // new array with the same object of the service array

  pubTenders: publicTender[];
  subCat: SubCategory[];

  broucher: any;
  supcatobj: any;
  // paging
  // config: any;
  // collection = { count: 60, data: [] };
  // paging

  // constructor(private pstser:PostService) { }

  constructor(
    private publicTenderser: PublicTenderService,
    private subCatSer: SubCategoryService,
    private router: Router
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  navigationSubscription;
  date: Date = new Date();

  pubobj: publicTender = new publicTender();

  // message:string

  // ID: number;
  // Brochure: string;
  // Supplier: Supplier;
  // Date: Date;
  // SupplierID: number;
  // SubCategory: SubCategory;
  // subCategoryID: number;
  // TenderDescription:string

  ngOnInit() {

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
      // console.log(this.pubobj.brochure);
    }

    this.publicTenderser.getTender().subscribe((data) => {
      this.pubTenders = data;
      console.log(data);
    });

    this.subCatSer.getSubCategory().subscribe((data) => {
      this.subCat = data;
      console.log(data);
    });
  }
  onSubmit(formData) {
    this.pubobj.tenderDescription = formData.discription;
    this.pubobj.brochure = formData.broucher;

    this.pubobj.subCategoryID = formData.subCategoryID;

    this.pubobj.expireDate = formData.expireDate;

    console.log(formData);
    console.log(this.pubobj);

    this.publicTenderser.addTender(this.pubobj).subscribe((data) => {
      console.log(data);
      this.router.navigate(['admin']);
    });
  }
}

