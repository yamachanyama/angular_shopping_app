import { Injectable }    from '@angular/core';

import { Goods } from './goods';

@Injectable()
export class GoodsPassService {  

  //サービス起動時に、コンストラクタで利用するものをインスタンス化
  constructor() { }


  /** コンポーネント間受け渡し商品 */
  private goods : Goods;


  /** コンポーネント間受け渡し商品設定 */
  setGoods(goods: Goods) : void {
    //リクエストパラメータセット
    this.goods = goods;
  }


  /** コンポーネント間受け渡し商品取得 */
  getGoods() : Goods {
      return this.goods;
  }

  
  /** コンポーネント間受け渡し商品リフレッシュ */
  refleshGoods() : void {
      this.goods = new Goods;
  }


}