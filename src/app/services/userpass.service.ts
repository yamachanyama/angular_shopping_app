import { Injectable }    from '@angular/core';

import { User } from './user';

@Injectable()
export class UserPassService {  

  //サービス起動時に、コンストラクタで利用するものをインスタンス化
  constructor() { }


  /** コンポーネント間受け渡しユーザ */
  private user : User;


  /** コンポーネント間受け渡しユーザ設定 */
  setUser(user: User) : void {
    //リクエストパラメータセット
    this.user = user;
  }


  /** コンポーネント間受け渡しユーザ取得 */
  getUser() : User {
      return this.user;
  }

  
  /** コンポーネント間受け渡しユーザリフレッシュ */
  refleshUser() : void {
      this.user = new User;
  }


}