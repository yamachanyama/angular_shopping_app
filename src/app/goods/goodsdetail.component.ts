import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Goods } from "../services/goods";
import { GoodsService } from "../services/goods.service";

import { CONST } from '../common/const';

@Component({
  selector: 'goodsdetail-root',
  templateUrl: './goodsdetail.component.html'
})

export class GoodsDetailComponent implements OnInit{
  //画面にセットする商品情報
  goods: Goods;
  //Google Drive上の画像URL
  googleDrivePictureUrl = CONST.REST_API.GOOGLE_DRIVE_PICTURE_URL;

  //コンポーネント起動時に、コンストラクタで利用するものをインスタンス化
  constructor(
    private goodsService: GoodsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  //コンポーネントの初期処理
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.goodsService.getGoods(+params['id']))
        .subscribe(
          result => this.setGoods(result));
  }


  /** Rest APIから取得した結果を画面にセットする処理 */
  setGoods(result) {
    if(result.error) {
      alert('Web APIエラー' + result.message);
      return;
    }
    this.goods = result.data;
  }
  

}
