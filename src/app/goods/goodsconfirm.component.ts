import { Component, OnInit } from '@angular/core';
import { GoodsPassService } from '../services/goodspass.service';
import { GoodsService } from '../services/goods.service';
import { Goods } from '../services/goods';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'goodsconfirm-root',
  templateUrl: './goodsconfirm.component.html',
  styleUrls: ['./goodsconfirm.component.css'],
})
export class GoodsConfirmComponent{
  @BlockUI() blockUI: NgBlockUI;
  goods : Goods;
  
  constructor(private goodsPassService: GoodsPassService, private goodsService : GoodsService, private router: Router) { 
    this.goods = goodsPassService.getGoods();
    // TODO:ログインユーザのIDを指定する
    this.goods.registerId = "5";
  }

  /** 商品登録 */
  registGoods(goods : Goods): void {
    this.goodsService.createGoods(goods).subscribe(
      result => {
        this.goRegistFinish();
      },
      error => {
        alert('APIエラー')
      }
    );
  }

  /** 商品登録完了後の画面遷移 */
  goRegistFinish() {
    this.blockUI.stop();
    this.router.navigate(['goodsfinish']);
  }


}