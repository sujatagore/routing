import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userloginState : boolean = false;
  logInStatesub$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor(
    private _router : Router
  ) { }

  isAuthenticated(){
    return new Promise<boolean>((resolve, reject) =>{
        setTimeout(() => {
          // resolve(this.userloginState)

          // If Local storage has token then resolve true/false

          if (localStorage.getItem('token')) {
            this.userloginState = true;
            // this.logInStatesub$.next(this.userloginState);
          } else {
            this.userloginState = false;
            // this.logInStatesub$.next(this.userloginState);
            this._router.navigate([''])
          }

          this.logInStatesub$.next(this.userloginState);
          resolve(this.userloginState)

        }, 500);
    })
  }

  logInApp(email:string, pass:string){
    //API call and send emailID and password to backend >> LOG-IN request
    // this.userloginState = true;
    // localStorage.setItem('token', 'JWT Token store in LS');
    // this._router.navigate(['home'])

    if (email === 'jhon@gmail.com' && pass === 'Pass@123') {
      localStorage.setItem('userRole', 'buyer');
      this.userloginState = true;
      localStorage.setItem('token', 'JWT Token store in LS');
      this._router.navigate(['home']);
    } else if (email === 'jun@gmail.com' && pass === 'Pass@123') {
      localStorage.setItem('userRole', 'admin');
      this.userloginState = true;
      localStorage.setItem('token', 'JWT Token store in LS');
      this._router.navigate(['home']);
    } else if (email === 'may@gmail.com' && pass === 'Pass@123') {
      localStorage.setItem('userRole', 'sa');
      this.userloginState = true;
      localStorage.setItem('token', 'JWT Token store in LS');
      this._router.navigate(['home']);
    }else{
      alert(`Invalid Email Id or Password !!!`)
    }
  }

  logOutApp(){
    // API call >> LOG-OUT request
    this.userloginState = false;
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    this.logInStatesub$.next(false);
    // after log out redirect to home page
    this._router.navigate([''])
  }
}

// jhon@gmail.com >> buyer
// jun@gmail.com >> admin
// may@gmail.com >> superAdmin

// home/dashboard >> to all (buyer, admin, superAdmin)
// users >> (admin, superAdmin)
// products >> to all (buyer, admin, superAdmin)
// fairs >> superAdmin

// Given auth services handle our API calls  of LOG-IN, SIGN-IN & LOG-OUT