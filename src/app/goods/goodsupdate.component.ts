import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Goods } from "../services/goods";
import { GoodsService } from "../services/goods.service";
import { CONST } from '../common/const';
import { GoodsPassService } from '../services/goodspass.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-goodsupdate',
  templateUrl: './goodsupdate.component.html',
  styleUrls: ['./goodsupdate.component.css'],
})

export class GoodsUpdateComponent implements OnInit{
  @BlockUI() blockUI: NgBlockUI;
  // 入力フォーム入力チェック定義
  goodsForm : FormGroup;
  // 入力フォーム入力値
  goods = new Goods;
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

  //コンポーネント起動時に、コンストラクタで利用するものをインスタンス化
  constructor(
    private goodsService: GoodsService,
    private route: ActivatedRoute,
    fb: FormBuilder, private goodsPassService: GoodsPassService){
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

  //コンポーネントの初期処理
  ngOnInit(): void {
    // 確認画面から戻るボタン押下で遷移したかどうかで処理分岐
    if(this.goodsPassService.getRefleshFlg()) {
      this.route.params
        .switchMap((params: Params) => this.goodsService.getGoods(+params['id']))
          .subscribe(
            result => this.setGoods(result));
    }else {
      this.goods = this.goodsPassService.getGoods();
      this.goodsPassService.setRefleshFlg(true);
    }
  }

  /** Rest APIから取得した結果を画面にセットする処理 */
  setGoods(result) {
    if(result.error) {
      alert('Web APIエラー' + result.message);
      return;
    }
    this.goods = result.data;
  }

  /** 画面入力値をコンポーネント間で受け渡せるように設定 */
  goodsPassSet() {
    this.goodsPassService.setGoods(this.goods);
  }

  /** ファイルアップロードエリア画像設定時の処理 */
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


