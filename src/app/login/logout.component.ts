import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserPassService } from '../services/userpass.service';
import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { AuthService } from '../services/auth.service';
import { CONST} from '../common/const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})

export class LogoutComponent {  
  // コンポーネント生成時の処理
  constructor(fb: FormBuilder, private userPassService: UserPassService, private userService : UserService, private router: Router, private authService: AuthService){
  }

  /**
   * ログアウト処理
   */
  logout() {
    this.authService.logout();
    this.router.navigate(['top']);

  }
}
