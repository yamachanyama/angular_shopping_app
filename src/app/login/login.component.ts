import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserPassService } from '../services/userpass.service';
import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { CONST} from '../common/const';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  @BlockUI() blockUI: NgBlockUI;
  
  // 入力フォーム入力チェック定義
  userForm : FormGroup;
  // 入力フォーム入力値
  user = new User;
  // ログインエラー
  loginError : boolean = false;
  // コンポーネント生成時の処理
  constructor(fb: FormBuilder, private userPassService: UserPassService, private userService : UserService, private router: Router){
  // 入力フォーム入力チェック定義
  this.userForm = fb.group({
      // ユーザID：
      'userId' : [null, Validators.required],
      // パスワード：必須チェック、パスワードパターンチェック
      'password' : [null, Validators.compose([Validators.required,Validators.pattern(CONST.REGEX.PASSWORD)])],
    },);
  }

  /** 画面入力値をコンポーネント間で受け渡せるように設定 */
  userPassSet() {
    this.userPassService.setUser(this.user);
  }
  
    /** ログイン処理 */
  login(): void {
    //TODO　ログイン認証処理を書く

    //ログイン成功時の画面遷移(ひとまず認証なしで商品検索へ遷移)
    this.goLoginFinish();
  }

    /** ログイン成功後の画面遷移 */
  goLoginFinish() {
    this.blockUI.stop();
    this.router.navigate(['goodssearch']);
  }
}
