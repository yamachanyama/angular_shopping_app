import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';
import { GoodsPassService } from '../services/goodspass.service';
import { Goods } from '../services/goods';
import { CONST} from '../common/const';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-goodsregist',
  templateUrl: './goodsregist.component.html',
  styleUrls: ['./goodsregist.component.css'],
})
export class GoodsRegistComponent{
  @BlockUI() blockUI: NgBlockUI;
  // 入力フォーム入力チェック定義
  goodsForm : FormGroup;
  // 入力フォーム入力値
  goods = new Goods;
  // 画面更新モードの判定
  private isUpdate: boolean = false;
  // ファイルアップロードエリア定義
  options: FancyImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: CONST.REST_API.BASE_URL + CONST.REST_API.GOODS_URL + 'upload',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };
  //Google Drive上の画像URL
  googleDrivePictureUrl = CONST.REST_API.GOOGLE_DRIVE_PICTURE_URL;

  // コンポーネント生成時の処理
  constructor(fb: FormBuilder, private goodsPassService: GoodsPassService){

    // 画面間で引き継いだ商品のリフレッシュ処理
    if(goodsPassService.getRefleshFlg()) {
      goodsPassService.refleshGoods();
      this.isUpdate = false;
    }else {
      goodsPassService.setRefleshFlg(true);
      this.isUpdate = true;
    }
    if(goodsPassService.getGoods() !== undefined){
      this.goods = goodsPassService.getGoods();
    }


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

  /** 画面入力値をコンポーネント間で受け渡せるように設定 */
  goodsPassSet() {
    this.goodsPassService.setGoods(this.goods);
  }

  /** ファイルアップロードエリア画像設定完了時の処理 */ 
  onUpload(file: UploadedFile) {
    this.goods.picture = file.response;
    this.blockUI.stop();
  }

  /** ファイルアップロードエリア画像設定時の処理 */
  fileChangeEvent(file: UploadedFile) {
    this.blockUI.start('Waiting...');
  }

  /** 画像変更ボタン押下時の処理 */
  changeImage() {
    this.goods.picture = "";
    this.goodsPassService.setGoods(this.goods);
  }

}