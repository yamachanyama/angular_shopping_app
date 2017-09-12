import { Component } from '@angular/core';
import { UserPassService } from '../services/userpass.service';
import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { CONST } from '../common/const';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-userupdateconfirm',
  templateUrl: './userupdateconfirm.component.html',
  styleUrls: ['./userupdateconfirm.component.css'],
})

export class UserUpdateConfirmComponent {
  
  @BlockUI() blockUI: NgBlockUI;
  // 入力フォーム入力値
  user : User;
  // コンポーネント生成時の処理
  constructor(private userPassService: UserPassService, private userService : UserService, private router: Router) { 
    this.user = userPassService.getUser();
      }

  /** ユーザ編集 */
  updateUser(user: User): void {
    this.userService.updateUser(user).subscribe(
      result => {
        this.goUpdateFinish();
      },
      error => {
        alert('APIエラー')
      }
    );
  }

  /** 画面入力値をコンポーネント間で受け渡せるように設定 */
  userPassSet() {
    this.userPassService.setUser(this.user);
  }
  
  /** ユーザ編集後の画面遷移 */
  goUpdateFinish() {
    this.blockUI.stop();
    this.router.navigate(['userupdatefinish']);
  }
}
