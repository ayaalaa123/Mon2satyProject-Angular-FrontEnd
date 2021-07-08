import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from 'src/app/models/Login';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  isLoading = false;
  data: any = {};
  logins: Login[];

  url: string;

  isAuth: boolean = false;

  constructor(private loginService: AuthService, private router: Router) {}

  onLogin(loginForm: NgForm) {
    // console.log(loginForm.value);

    if (loginForm.invalid) return;

    const login: Login = {
      companyCode: loginForm.value.companyCode,
      password: loginForm.value.password
    };

  //   this.logins.forEach((data) => {
  //     if (
  //       data.companyCode == login.companyCode ||
  //       data.password == login.password
  //     ) {
  //       this.isAuth = true;
  //       this.loginService.SetAuth(this.isAuth);
  //       this.loginService.GetLogin(login);
  //       sessionStorage.setItem('isAuth', 'true');
  //       sessionStorage.setItem('user', data.companyCode);
  //       sessionStorage.setItem('password', data.password);

  //       if (data.companyCode == 'admin' && data.password == 'admin') {
  //         sessionStorage.setItem('isManager', 'true');
  //         this.router.navigate(['/admin']);
  //         this.router.onSameUrlNavigation = 'reload';

  //         // this.url = "http://localhost:4200/admin";
  //       } else {
  //         // sessionStorage.setItem('isUser', 'true');
  //         // this.router.navigate(['/Supplier']);
  //         this.router.navigate(['Supplier']);
  //         // this.url = "http://localhost:4200/user";
  //         this.router.onSameUrlNavigation = 'reload';
  //       }
  //     }
  //   });

  // Last Version From Login
  this.logins.forEach((data) => {
    if (data.companyCode == login.companyCode && data.password == login.password) {
      this.isAuth = true;
      this.loginService.SetAuth(this.isAuth);
      this.loginService.GetLogin(login);
      sessionStorage.setItem('isAuth', 'true');
      sessionStorage.setItem('user', data.companyCode);
      sessionStorage.setItem('password', data.password);

      if(data.susspended === "YES") {
        alert("أنت محظور حاليا من فضلك تواصل مع مدير النظام!!");
        sessionStorage.removeItem('isAuth');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('password');
        this.router.navigate(["home"]);
      }

      if (data.companyCode == 'admin' && data.password == 'admin') {
        sessionStorage.setItem('isManager', 'true');
        // this.router.navigate(['admin']);
        this.router.navigateByUrl('admin');
        // this.router.onSameUrlNavigation = "reload";
        
        // this.url = "/admin";
      }

      else {
        this.router.navigate(['Supplier']);
        // this.url = "/Supplier";
        // this.router.onSameUrlNavigation = 'reload';
      }

    }
    // else {
    //   alert("Wrong Company Code Or Password");
    // }
  });
  if(this.isAuth == false) {
    alert("يرجى التأكد من كود الشركة أو كلمة المرور!!!!");
  }

    // this.loginService.GetLogin(login)
    // .subscribe((data) => {
    //   console.log(data);
    //   if(data == null) {
    //     this.router.navigate(['admin']);
    //   }
    //   else if(data.id != 0) {
    //     this.router.navigate(['Supplier']);
    //   }
    //   else {
    //     alert("Wrong Company Code Or Password !!");
    //     this.router.navigate(['login']);
    //   }
    // });

  }

  ngOnInit() {
    this.loadLogins();
    this.test();
    


  }

  loadLogins() {
    this.loginService.GetLogins().subscribe((data) => {
      this.logins = data;

      console.log(this.logins);
    });
  }

  test() {
    console.log(this.loginService.GetAuth());
    console.log(this.logins);
  }
}
