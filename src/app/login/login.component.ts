import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserPassService } from '../services/userpass.service';
import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { AuthService } from '../services/auth.service';
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
  constructor(fb: FormBuilder, private userPassService: UserPassService, private userService : UserService, private router: Router, private authService: AuthService){
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
    this.authService.login(this.user).subscribe(
      result => {
        if (result !== null && result.userNm !== null && result.userNm !== undefined) {
          //認証失敗してログイン画面にリダイレクトした場合はログイン後にその画面に遷移する
          //リダイレクトじゃない場合は商品検索画面に遷移する
          let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : 'goodssearch';
          this.router.navigate([redirect]);
        } else {
          this.loginError = true;
        }
      }
    );
  }
}
