import { Injectable }    from '@angular/core';
import { Headers, Http, Jsonp, RequestOptionsArgs, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from  "rxjs/Observable";
import "rxjs/add/operator/map";
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { User } from './user';
import { CONST } from '../common/const';

@Injectable()
export class UserService {

  @BlockUI() blockUI: NgBlockUI;
  //サービス起動時に、コンストラクタで利用するものをインスタンス化
  constructor(private http: Http, private jsonp: Jsonp) { }

  //Rest APIコール時のヘッダ
  private headers = new Headers({'Content-Type': 'application/json'});

  
  /** ユーザ取得(ユーザID) */
  getUser(id: number): Observable<User> {
    //リクエストパラメータセット
    let option = this.setHttpGetParam(CONST.REST_API.BASE_URL + CONST.REST_API.USER_URL + id);

    //Rest APIコール
    return this.jsonp.request(CONST.REST_API.BASE_URL + CONST.REST_API.USER_URL + id, option)
      .map((response) => {
        let content;
        let obj = response.json();
        content = {
          error: null,
          data: obj
        };
        console.dir(content);
        return content;
      });
  }

  /** ユーザ作成 */
  createUser(user: User): Observable<User> {
    this.blockUI.start('Waiting...'); 
    return this.http.post(CONST.REST_API.BASE_URL + CONST.REST_API.USER_URL, JSON.stringify(user), {headers: this.headers})
      .map((res) => {
        console.log(res);
        return res.json();
      });
    
  }

    /** ユーザ更新 */
  updateUser(user: User): Observable<User> {
    this.blockUI.start('Waiting...'); 
    return this.http.put(CONST.REST_API.BASE_URL + CONST.REST_API.USER_URL + user.userId, JSON.stringify(user), {headers: this.headers})
      .map((res) => {
        console.log(res);
        return res.json();
      });
    
  }

    /** ユーザ削除 */
  deleteUser(id: number): Observable<User> {
    this.blockUI.start('Waiting...'); 
    return this.http.delete(CONST.REST_API.BASE_URL + CONST.REST_API.USER_URL + id, {headers: this.headers})
      .map((res) => {
        console.log(res);
        return res.json();
      });
    
  }



  //Http(Get)通信のリクエストパラメータをセットする
  private setHttpGetParam(url: string): RequestOptions {
    let param = new URLSearchParams();
    param.set("callback", CONST.REST_API.JSONP_CALLBACK_NAME);
    let options: RequestOptionsArgs = {
      method: CONST.REST_API.HTTP_GET,
      url: url,
      search: param
    };
    return new RequestOptions(options);
  }

}