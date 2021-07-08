import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PrivateTender } from 'src/app/models/privateTender';
import { PtivatetenderserviceService } from '../../../../service/ptivatetenderservice.service';

@Component({
  selector: 'app-private-tender',
  templateUrl: './private-tender.component.html',
  styleUrls: ['./private-tender.component.css'],
})
export class PrivateTenderComponent implements OnInit {
  privatetendets: PrivateTender[];
  p:number=1;

  constructor(private privser: PtivatetenderserviceService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  navigationSubscription;
  ngOnInit() {
    this.privser.getTender().subscribe((data) => {
      console.log(data);
      this.privatetendets = data;
    });
  }

  // myFunction() {
  //   var input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementById('myInput');
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById('myUL');
  //   li = document.getElementById('mysubcat');
  //   for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName('a')[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = '';
  //     } else {
  //       li[i].style.display = 'none';
  //     }
  //   }
  // }
}
