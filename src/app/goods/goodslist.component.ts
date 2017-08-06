import { Component, OnInit } from '@angular/core';
import {Goods} from "../services/goods";
import {GoodsService} from "../services/goods.service";

@Component({
  selector: 'goodslist-root',
  templateUrl: './goodslist.component.html'
})

export class GoodsListComponent implements OnInit{
    
    //コンポーネント生成時の処理
    constructor(private goodsService: GoodsService){}

    //商品リスト
    goodsList : Goods[];

    //画面初期表示イベント処理
    ngOnInit(): void {
        this.goodsService.getGoods().subscribe(
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
