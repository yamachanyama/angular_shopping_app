import { Component, OnInit } from '@angular/core';
import { GoodsPassService } from '../services/goodspass.service';
import { GoodsService } from '../services/goods.service';
import { Goods } from '../services/goods';
import { CONST } from '../common/const';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-goodsupdateconfirm',
  templateUrl: './goodsupdateconfirm.component.html',
  styleUrls:['./goodsupdateconfirm.component.css']
})

export class GoodsUpdateConfirmComponent {
  @BlockUI() blockUI: NgBlockUI;
  goods : Goods;
  //Google Drive上の画像URL
  googleDrivePictureUrl = CONST.REST_API.GOOGLE_DRIVE_PICTURE_URL;
  
  constructor(private goodsPassService: GoodsPassService, private goodsService : GoodsService, private router: Router) { 
    this.goods = goodsPassService.getGoods();
    // 更新日時を設定
    this.goods.updateDate = new Date;
  }

  /** 商品更新 */
  updateGoods(goods : Goods): void {
    this.goodsService.updateGoods(goods).subscribe(
      result => {
        this.goRegistFinish();
      },
      error => {
        alert('APIエラー')
        this.blockUI.stop();
      }
    );
  }

  /** 商品更新完了後の画面遷移 */
  goRegistFinish() {
    this.blockUI.stop();
    this.router.navigate(['goodsupdatefinish']);
  }

  /** 戻るボタン押下時の画面遷移 */
  backRegist() {
    this.goodsPassService.setRefleshFlg(false);
    this.router.navigate(['goodsupdate', this.goods.goodsId]);
  }

}
