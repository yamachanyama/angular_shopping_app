import { Injectable } from '@angular/core';
import { Headers, Http, Jsonp, RequestOptionsArgs, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { User } from './user';
import { CONST } from '../common/const';

@Injectable()
export class AuthService {
  @BlockUI() blockUI: NgBlockUI;
  //サービス起動時に、コンストラクタで利用するものをインスタンス化
  constructor(private http: Http, private jsonp: Jsonp) { }

  //Rest APIコール時のヘッダ
  private headers = new Headers({'Content-Type': 'application/json'});

  // ログイン状態の判定
  isLoggedIn: boolean = false;

  // 認証失敗してログイン画面にリダイレクトする前に遷移を試みた画面のurl
  redirectUrl: string;

  /** ログイン */
  login(user: User): Observable<User> {
    this.blockUI.start('Waiting...'); 
    return this.http.post(CONST.REST_API.BASE_URL + CONST.REST_API.LOGIN_URL, JSON.stringify(user), {headers: this.headers})
    .map((response) => {
      this.blockUI.stop();
      this.isLoggedIn = true  
      return response.text()===''?null:response.json();
    });
  }

  /** ログアウト */
  logout(): void {
    this.isLoggedIn = false;
  }
}