import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  email: string;

  constructor(public authService: AuthService) {
    authService.getUser().subscribe(user => {
      this.email = user.email;
    });
  }

  ngOnInit() {
  }

}
