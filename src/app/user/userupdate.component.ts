import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserPassService } from '../services/userpass.service';
import { User } from '../services/user';
import { CONST} from '../common/const';

@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css'],
})

export class UserUpdateComponent {

  // 入力フォーム入力チェック定義
  userForm : FormGroup;
  // 入力フォーム入力値
  user = new User;
  // コンポーネント生成時の処理
  constructor(fb: FormBuilder, private userPassService: UserPassService){
    // 入力フォーム入力チェック定義
    this.userForm = fb.group({
      // ユーザID：
      //'userId' : [null, Validators.required],
      // パスワード：必須チェック、パスワードパターンチェック
      'password' : [null, Validators.compose([Validators.required,Validators.pattern(CONST.REGEX.PASSWORD)])],
      // パスワード(確認用)：必須チェック、パスワードパターンチェック
      'passwordConf' : [null, Validators.compose([Validators.required, Validators.pattern(CONST.REGEX.PASSWORD)])],
      // 名前：必須チェック
      'userNm' : [null, Validators.required],
      // フリガナ：必須チェック、全角カナチェック
      'userFurigana' : [null, Validators.compose([Validators.required,Validators.pattern(CONST.REGEX.FURIGANA)])],
      // 電話番号：必須チェック、電話番号パターンチェック
      'tel' : [null,  Validators.compose([Validators.required, Validators.pattern(CONST.REGEX.TEL)])],
      // メールアドレス：必須チェック、メールアドレスパターンチェック
      'mail' : [null, Validators.compose([Validators.required,Validators.pattern(CONST.REGEX.EMAIL)])],
      // 郵便番号：必須チェック
      //'postalCode' : [null, Validators.required],
      // 住所：必須チェック
      'address' : [null, Validators.required],
    },{ 'validator': this.passwordMatchValidator });
  }

  /** 画面入力値をコンポーネント間で受け渡せるように設定 */
  userPassSet() {
    this.userPassService.setUser(this.user);
  }
  
  /** パスワードとパスワード(確認用)の一致判定 */
  passwordMatchValidator(g: FormGroup) {
  return g.get('password').value === g.get('passwordConf').value
       ? null: {'mismatch': true};
 }  
}
