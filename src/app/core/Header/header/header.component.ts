import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }
  
  isAuth: boolean = false;

  navigationSubscription;

  

  ngOnInit(): void {
    if(sessionStorage.getItem('isAuth') == "true"){
      this.isAuth = true;
    }
    else {
      this.isAuth = false;
    }
  }
  onLogout() {
    sessionStorage.removeItem('isAuth');
    sessionStorage.removeItem('isManager');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('password');
    this.router.navigate(['/login']);
  }
}
