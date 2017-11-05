import { Component, OnInit } from '@angular/core';
import { GoodsPassService } from '../services/goodspass.service';
import { UserPassService } from '../services/userpass.service';
import { GoodsService } from '../services/goods.service';
import { Goods } from '../services/goods';
import { CONST } from '../common/const';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-goodsregistconfirm',
  templateUrl: './goodsregistconfirm.component.html',
  styleUrls: ['./goodsregistconfirm.component.css'],
})
export class GoodsRegistConfirmComponent{
  @BlockUI() blockUI: NgBlockUI;
  goods : Goods;
  //Google Drive上の画像URL
  googleDrivePictureUrl = CONST.REST_API.GOOGLE_DRIVE_PICTURE_URL;
  
  constructor(private userPassService: UserPassService, private goodsPassService: GoodsPassService, private goodsService : GoodsService, private router: Router) { 
    this.goods = goodsPassService.getGoods();
    // ログインユーザのIDを指定
    this.goods.registerId = userPassService.getUser().userId;
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
    this.router.navigate(['goodsregistfinish']);
  }


}