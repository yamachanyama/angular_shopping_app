import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Goods } from "../services/goods";
import { GoodsService } from "../services/goods.service";

import { CONST } from '../common/const';

@Component({
  selector: 'goodslist-root',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css'],
})

export class GoodsListComponent implements OnInit{
    
    //コンポーネント生成時の処理
    constructor(
        private goodsService: GoodsService,
        private route: ActivatedRoute,
        private router: Router){}


    //商品リスト
    goodsList : Goods[];
    //Google Drive上の画像URL
    googleDrivePictureUrl = CONST.REST_API.GOOGLE_DRIVE_PICTURE_URL;


    //画面初期表示イベント処理
    ngOnInit(): void {
        this.goodsService.getGoodes().subscribe(
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

}
