import { Injectable }    from '@angular/core';
import { Headers, Http, Jsonp, RequestOptionsArgs, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from  "rxjs/Observable";
import "rxjs/add/operator/map";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Goods } from './goods';
import { CONST } from '../common/const';

@Injectable()
export class GoodsService {

  @BlockUI() blockUI: NgBlockUI;
  //サービス起動時に、コンストラクタで利用するものをインスタンス化
  constructor(private http: Http, private jsonp: Jsonp) { }

  //Rest APIコール時のヘッダ
  private headers = new Headers({'Content-Type': 'application/json'});



  /** 商品一覧取得 */
  getGoodes(sortField: string, sortOrder: string, conditionField: string, conditionValue: string): Observable<Goods[]> {
    //リクエストパラメータセット
    let option = this.setHttpGetParam(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL, sortField, sortOrder, conditionField, conditionValue);

    //Rest APIコール
    return this.jsonp.request(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL, option)
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

  // /** 商品一覧取得(ソート済み) */
  // getSortedGoodes(field: string): Observable<Goods[]> {
  //   //リクエストパラメータセット
  //   let option = this.setHttpGetParam(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL + field);
    
  //   //Rest APIコール
  //   return this.jsonp.request(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL + field, option)
  //     .map((response) => {
  //       let content;
  //       let obj = response.json();
  //       content = {
  //         error: null,
  //         data: obj
  //       };
  //       console.dir(content);
  //       return content;
  //     });

  // }

  
  /** 商品取得(商品ID) */
  getGoods(id: number): Observable<Goods> {

    let option = this.setHttpGetParam(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL + id, null, null, null, null);

    //Rest APIコール
    return this.jsonp.request(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL + id, option)
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

  /** 商品作成 */
  createGoods(goods: Goods): Observable<Goods> {
    this.blockUI.start('Waiting...'); 
    return this.http.post(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL, JSON.stringify(goods), {headers: this.headers})
      .map((res) => {
        console.log(res);
        return res.json();
      });
    
  }

  /** 商品更新 */
  updateGoods(goods: Goods): Observable<Goods> {
    this.blockUI.start('Waiting...'); 
    return this.http.put(CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL + goods.goodsId, JSON.stringify(goods), {headers: this.headers})
      .map((res) => {
        console.log(res);
        return res.json();
      });
    
  }

  //Http(Get)通信のリクエストパラメータをセットする
  private setHttpGetParam(url: string, sortField: string, sortOrder: string, conditionField: string, conditionValue: string): RequestOptions {
    let param = new URLSearchParams();

    param.append('sortField', sortField);
    param.append('sortOrder', sortOrder);
    param.append('conditionField', conditionField);
    param.append('conditionValue', conditionValue);
    param.set("callback", CONST.REST_API.JSONP_CALLBACK_NAME);
    let options: RequestOptionsArgs = {
      method: CONST.REST_API.HTTP_GET,
      url: url,
      search: param
    };
    return new RequestOptions(options);
  }

}