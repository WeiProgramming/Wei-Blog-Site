import { Injectable } from '@angular/core';
import { AngularFireAuth } from  '@angular/fire/auth';
import { User } from  'firebase';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async Login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['admin/dashboard']);
    } catch (e) {
      console.log(`Error!${e.message}`);
      this.router.navigate(['login']);
    }
  }

  getUser(): Observable<any> {
      return this.afAuth.authState;
  }

  async doLogout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  // authenticated if not null
  get isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
}
