import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/SubCategory';
import { SubCategoryService } from 'src/app/service/sub-category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-private-tender',
  templateUrl: './create-private-tender.component.html',
  styleUrls: ['./create-private-tender.component.css']
})
export class CreatePrivateTenderComponent implements OnInit {

  subCat: SubCategory[];

  constructor(private subCatSer: SubCategoryService,
    private router: Router) { }

  ngOnInit(): void {
    this.subCatSer.getSubCategory().subscribe((data) => {
      this.subCat = data;
      console.log(data);
    });
  }
  }

  

