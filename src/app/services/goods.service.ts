import { Injectable }    from '@angular/core';
import { Headers, Http, Jsonp, RequestOptionsArgs, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from  "rxjs/Observable";
import "rxjs/add/operator/map";

import { Goods } from './goods';

@Injectable()
export class GoodsService {

  //RestAPIのURL
  private goodsUrl = 'https://shopping-app-spring-boot.herokuapp.com/api/goods';
  //JSONPコールバック関数名(Angular固有値）
  CALLBACK = 'JSONP_CALLBACK';
  

  //コンストラクタで利用するモジュールをインスタンス化
  constructor(private http: Http, private jsonp: Jsonp) { }


  //商品一覧取得
  getGoods(): Observable<Goods[]> {
    //リクエストパラメータセット
    let option : RequestOptions;
    option = this.setHttpGetParam(this.goodsUrl);

    //レスポンス返却
    return this.jsonp.request(this.goodsUrl, option)
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


  //Http(Get)通信のリクエストパラメータをセットする
  private setHttpGetParam(url: string): RequestOptions {
    let param = new URLSearchParams();
    param.set("callback", this.CALLBACK);
    let options: RequestOptionsArgs = {
      method: "get",
      url: url,
      search: param
    };
    return new RequestOptions(options);
  }

}