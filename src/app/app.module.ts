import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BlockUIModule } from 'ng-block-ui';
import { AppRoutingModule } from './common/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { 
  MdCheckboxModule, 
  MdRadioModule, 
  MdCardModule, 
  MdInputModule, 
  MdButtonModule, 
  MdToolbarModule,
  MdMenuModule,
  MdIconModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";


/* コンポーネントを追加する場合は以下import追加 */
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { Header } from './common/header';
import { GoodsListComponent } from './goods/goodslist.component';
import { GoodsDetailComponent } from './goods/goodsdetail.component';
import { GoodsRegistComponent } from './goods/goodsregist.component';
import { GoodsConfirmComponent } from './goods/goodsconfirm.component';
import { GoodsFinishComponent } from './goods/goodsfinish.component';


//商品情報取得用service
import { GoodsService } from './services/goods.service';
import { GoodsPassService } from './services/goodspass.service';


@NgModule({
  /* コンポーネントを追加する場合は以下に追加 */
  declarations: [
    AppComponent,
    TopComponent,
    Header,
    GoodsListComponent,
    GoodsDetailComponent,
    GoodsRegistComponent,
    GoodsConfirmComponent,
    GoodsFinishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    FlexLayoutModule,
    BlockUIModule
  ],
  providers: [
    GoodsService,
    GoodsPassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
