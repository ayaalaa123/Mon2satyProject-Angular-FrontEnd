import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/SubCategory';
import { PrivateTender } from 'src/app/models/privateTender';
import { PtivatetenderserviceService } from 'src/app/service/ptivatetenderservice.service';
import { SubCategoryService } from 'src/app/service/sub-category.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
declare var jQuery: any;

@Component({
  selector: 'app-sent-private-tender-to-suppliers',
  templateUrl: './sent-private-tender-to-suppliers.component.html',
  styleUrls: ['./sent-private-tender-to-suppliers.component.css']
})
export class SentPrivateTenderToSuppliersComponent implements OnInit {
  subCat: SubCategory[];
  privateObj: PrivateTender = new PrivateTender();
  constructor(
    private privateTenderser: PtivatetenderserviceService,
    private subCatSer: SubCategoryService,
    public r: Router,
    private http: HttpClient,
    public ar: ActivatedRoute
  ) {
    this.navigationSubscription = this.r.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  id: number;

  navigationSubscription;
ngOnInit():void {
    //////////////////////////////////Modal
    (function name($) {
      $(document).ready(function () {
        $('#myBtn').on('click', function () {
          $('#myModal').css('display', 'block');
        });
        $('.bt').on('click', function () {
          $('#myModal').hide();
        });
        $(window).click(function (e) {
          if (e.target == $('#myModal')) {
            $('#myModal').hide();
          }
        });
        $('#btnok').on('click', function () {
          $('#myModal').hide();
        });
      });
    })(jQuery);
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
    this.subCatSer.getSubCategory().subscribe((data) => {
      this.subCat = data;
      console.log(data);
    });
  }
  onSubmit(formData) {
    this.privateObj.brochure = formData.broucher;

    this.privateObj.subCategoryID = formData.subCategoryID;
    this.id = this.privateObj.subCategoryID;

    this.privateObj.expireDate = formData.expireDate;

    console.log(formData);

    this.privateTenderser
      .addPrivateTender(this.privateObj)
      .subscribe((deta) => {
        console.log(deta);
        this.r.navigate(['admin/privatetender']);
    });
    console.log(formData);
  }
}
