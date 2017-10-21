import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Goods } from "../services/goods";
import { GoodsService } from "../services/goods.service";

import { CONST } from '../common/const';

@Component({
  selector: 'app-registedgoodssearch',
  templateUrl: './registedgoodssearch.component.html',
  styleUrls: ['./registedgoodssearch.component.css'],
})

export class RegistedGoodsSearchComponent  implements OnInit{

  //コンポーネント生成時の処理
  constructor(
    private goodsService: GoodsService,
    private route: ActivatedRoute,
    private router: Router,
  ){}


  //商品リスト
  goodsList : Goods[];
  // キーワード検索
  searchKeyword: string = '';
  //Google Drive上の画像URL
  googleDrivePictureUrl = CONST.REST_API.GOOGLE_DRIVE_PICTURE_URL;


  //画面初期表示イベント処理
  ngOnInit(): void {
    this.goodsService.getGoodes('', '', '', '').subscribe(
      result => this.setGoods(result),
      error => alert('通信エラー' + error)
    );
  }


  //Web APIから取得したデータを商品リストにセットする
  setGoods(result): void {
    if(result.error) {
      alert('Web APIエラー' + result.message);
    }

    this.goodsList = result.data;
  }



  /** ソートボタンクリック時に商品情報(ソート済み)を再取得する */
  onClickSort(sortField: string,sortOrder: string): void {
    this.goodsService.getGoodes(sortField,sortOrder,'keyword',this.searchKeyword).subscribe(
      result => this.setGoods(result),
      error => alert('通信エラー' + error)
    );
  }

  /** ソートボタンクリック時に商品情報(ソート済み)を再取得する */
  onClickSearchByKeyword(): void {
    this.goodsService.getGoodes('', '', 'keyword', this.searchKeyword).subscribe(
      result => this.setGoods(result),
      error => alert('通信エラー' + error)
    );
  }
}
