import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GoodsPassService } from '../services/goodspass.service';
import { Goods } from '../services/goods';

@Component({
  selector: 'goodsregist-root',
  templateUrl: './goodsregist.component.html',
  styleUrls: ['./goodsregist.component.css'],
})
export class GoodsRegistComponent{

  // 入力フォーム入力チェック定義
  goodsForm : FormGroup;
  // 入力フォーム入力値
  goods = new Goods;

  // コンポーネント生成時の処理
  constructor(fb: FormBuilder, private goodsPassService: GoodsPassService){
    // 入力フォーム入力チェック定義
    this.goodsForm = fb.group({
      // 商品名：必須チェック
      'goodsNm' : [null, Validators.required],
      // 'lastName': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      // 値段：必須チェック
      'price' : [null, Validators.required],
      // 在庫数：必須チェック
      'stock' : [null, Validators.required],
      // 基本情報：必須チェック
      'basicInfo' : [null, Validators.required],
      // キーワード：入力チェックなし
      'keyword' : false,
      // 写真：入力チェックなし
      'picture' : false
    });
  }

  //　画面入力値をコンポーネント間で受け渡せるように設定
  goodsPassSet() {
    this.goodsPassService.setGoods(this.goods);
  }



}