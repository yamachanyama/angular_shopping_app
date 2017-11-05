import { Component } from '@angular/core';
import { UserPassService } from '../services/userpass.service';
import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { CONST } from '../common/const';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-userupdateconfirm',
  templateUrl: './userregistconfirm.component.html',
  styleUrls: ['./userregistconfirm.component.css'],
})

export class UserRegistConfirmComponent {
  
  @BlockUI() blockUI: NgBlockUI;
  // 入力フォーム入力値
  user : User;
  
  // コンポーネント生成時の処理
  constructor(private userPassService: UserPassService, private userService : UserService, private router: Router) { 
    this.user = userPassService.getUser();
      }

  /** ユーザ登録 */
  registUser(user: User): void {
    this.userService.createUser(user).subscribe(
      result => {
        this.goRegistFinish();
      },
      error => {
        alert('APIエラー')
      }
    );
  }

  
  /** ユーザ登録後の画面遷移 */
  goRegistFinish() {
    this.blockUI.stop();
    this.router.navigate(['userregistfinish']);
  }
}