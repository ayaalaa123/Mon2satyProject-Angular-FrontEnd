import { Component, OnInit } from '@angular/core';
import { NewSupplierService } from 'src/app/service/new-supplier.service';
import { NewSupplier } from 'src/app/models/NewSupplier';

@Component({
  selector: 'app-confirmednewsuppliers',
  templateUrl: './confirmednewsuppliers.component.html',
  styleUrls: ['./confirmednewsuppliers.component.css'],
})
export class ConfirmednewsuppliersComponent implements OnInit {
  newsuppliiers: NewSupplier[];
  p: number = 1;

  constructor(private newsupser: NewSupplierService) {}

  ngOnInit() {
    this.newsupser.getnewsuppliers().subscribe((data) => {
      this.newsuppliiers = data;
      console.log(data);
    });
  }
  deleteNewSupplier(newsupid: number) {
    var del = confirm('هل تريد تأكيد الحذف؟');
    if (del == true) {
      this.newsupser.deleteCurrentSupplier(newsupid).subscribe((deta) => {
        console.log(newsupid);
        for (let i = 0; i < this.newsuppliiers.length; ++i) {
          if (this.newsuppliiers[i].id === newsupid) {
            this.newsuppliiers.splice(i, 1);
          }
        }
      });
    }
    // else{

    // }
  }
  EditDetals(id: number) {
    console.log(id);
  }
}
