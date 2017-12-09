import { Injectable }    from '@angular/core';

import { Goods } from './goods';

@Injectable()
export class GoodsPassService {  

  //サービス起動時に、コンストラクタで利用するものをインスタンス化
  constructor() { }

  /** コンポーネント間受け渡し商品 */
  private goods : Goods;
  /** コンポーネントリフレッシュフラグ(falseの場合はリフレッシュしない) */
  private refleshFlg : Boolean = true;

  /** コンポーネント間受け渡し商品設定 */
  setGoods(goods: Goods) : void {
    //リクエストパラメータセット
    this.goods = goods;
  }
  /** コンポーネント間受け渡し商品取得 */
  getGoods() : Goods {
    return this.goods;
  }

  /** リフレッシュフラグ設定 */
  setRefleshFlg(refleshFlg: Boolean) {
    this.refleshFlg = refleshFlg;
  }
　/** リフレッシュフラグ取得 */
  getRefleshFlg() {
    return this.refleshFlg;
  }
  
  /** コンポーネント間受け渡し商品リフレッシュ */
  refleshGoods() : void {
    this.goods = new Goods;
  }


}