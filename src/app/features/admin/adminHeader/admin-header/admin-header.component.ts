import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (
      sessionStorage.getItem('isAuth') == 'true' &&
      sessionStorage.getItem('isManager') == 'true'
    ) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  // onLogout() {
  //   sessionStorage.removeItem('isAuth');
  //   sessionStorage.removeItem('isManager');
  //   this.router.navigate(['/login']);
  // }
}
