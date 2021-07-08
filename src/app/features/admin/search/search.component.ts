import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models/SubCategory';
import { SubCategoryService } from 'src/app/service/sub-category.service';
declare var jQuery: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  subcatarr: SubCategory[];
  p: number = 1;
  constructor(private subcatser: SubCategoryService) {}

  ngOnInit(): void {
    //get subcatgries
    this.subcatser.getSubCategory().subscribe((data) => {
      console.log(data);
      this.subcatarr = data;
      //search
      (function ($) {
        $(document).ready(function () {
          $('#myInput').on('keyup', function () {
            var value = $(this).val().toLowerCase();
            $('#myTable tr').filter(function () {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
          });
        });
      })(jQuery);
    });
  }
}
