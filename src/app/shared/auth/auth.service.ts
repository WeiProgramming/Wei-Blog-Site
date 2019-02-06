import { Injectable } from '@angular/core';
import { AngularFireAuth } from  "@angular/fire/auth";
import { auth } from  'firebase/app';
import { User } from  'firebase';
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe(user => {
      if(user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user))
      } else {
        localStorage.setItem('user', null);
      }
    })
  }

  async Login(email: string, password: string) {
    console.log(email + ' ' + password);
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['dashboard']);
    }
    catch(e) {
      alert(`Error!${e.message}`);
    }
  }

  async doLogout(){
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  //authenticated if not null
  get isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
