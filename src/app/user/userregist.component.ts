import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UserPassService } from '../services/userpass.service';
import { User } from '../services/user';
import { CONST} from '../common/const';

@Component({
  selector: 'app-userregist',
  templateUrl: './userregist.component.html',
  styleUrls: ['./userregist.component.css'],
})

export class UserRegistComponent {

  // 入力フォーム入力チェック定義
  userForm : FormGroup;
  // 入力フォーム入力値
  user = new User;
  // 確認画面から戻ってきたときの判定
  isReturn: boolean = false;
   
  // コンポーネント生成時の処理
  constructor(fb: FormBuilder, private userPassService: UserPassService){
    
    if(userPassService.getUser() !== undefined){
    this.user = userPassService.getUser();
    }
    // 入力フォーム入力チェック定義
    this.userForm = fb.group({
   
    // パスワード：必須チェック、パスワードパターンチェック
    'password' : [null, Validators.compose([Validators.required,Validators.pattern(CONST.REGEX.PASSWORD)])],   
    // 'lastpassword': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
        
    // パスワード確認用：必須チェック、パスワードパターンチェック（'passwordConf' なの？）
    'passwordConf' : [null, Validators.compose([Validators.required, Validators.pattern(CONST.REGEX.PASSWORD)])],
    // 'lastpasswordConf': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
   
        
    // ユーザID：必須チェック   
    'userId' : [null, Validators.required],
   
    // 名前：必須チェック、
    'userNm' : [null, Validators.required],
   
　　// フリガナ：必須チェック、全角カナチェック（ 'userFurigana' : ）
　　'userFurigana' : [null, Validators.compose([Validators.required,Validators.pattern(CONST.REGEX.FURIGANA)])],
   
　　// 電話番号：必須チェック、電話番号パターンチェック（'tel' :）
　　'tel' :[null,  Validators.compose([Validators.required, Validators.pattern(CONST.REGEX.TEL)])],
   
　　// メールアドレス：必須チェック、アドレスパターンチェック（mail）
　　'mail' :[null, Validators.compose([Validators.required,Validators.pattern(CONST.REGEX.EMAIL)])],
   
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
