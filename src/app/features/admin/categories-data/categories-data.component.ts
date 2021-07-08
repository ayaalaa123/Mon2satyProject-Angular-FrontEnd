import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/Category';
import { SubCategoryService } from 'src/app/service/sub-category.service';
import { SubCategory } from 'src/app/models/SubCategory';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-categories-data',
  templateUrl: './categories-data.component.html',
  styleUrls: ['./categories-data.component.css']
})
export class CategoriesDataComponent implements OnInit {

  constructor(private catService: SubCategoryService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  navigationSubscription;
  cat: Category[] = [];

  subCat: SubCategory[] = [];


  ngOnInit(): void {

    this.catService.getSubCategory()
    .subscribe((data) => {
      this.subCat = data;
      console.log(data);
    });

    this.catService.getCategories()
    .subscribe((data) => {
      this.cat = data;
      console.log(data);
    });

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
    }
  }

  onSubmitCategory(categoryForm: NgForm) {
    console.log(categoryForm.value);
    const cat = new Category();
    cat.name = categoryForm.value.category;
    this.catService.addCategory(cat)
    .subscribe((data) => {
      console.log(data);
      if(data.id != 0) {
        alert("تم الإضافه");
      }
      this.router.navigate(['admin/category']);
    });
  }

  onSubmitSubCategoryCategory(subCategoryForm: NgForm) {
    console.log(subCategoryForm.value);
    const subCat = new SubCategory();
    subCat.Name = subCategoryForm.value.subCategory;
    subCat.CategoryID = subCategoryForm.value.category;
    this.catService.addSubCategory(subCat)
    .subscribe((data) => {
      console.log(data);
      if(data.ID != 0) {
        alert("تم الإضافه");
      }
    });
  }

}
