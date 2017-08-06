import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule}    from '@angular/http';

import { AppRoutingModule } from './common/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MdCheckboxModule,MdRadioModule,MdCardModule,MdInputModule,MdButtonModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";



import { AppComponent } from './app.component';
import { GoodsListComponent } from './goods/goodslist.component'
import { GoodsDetailComponent } from './goods/goodsdetail.component'
import { TopComponent } from './top/top.component'

//商品情報取得用service
import {GoodsService} from './services/goods.service';

@NgModule({
  declarations: [
    AppComponent,
    GoodsListComponent,
    GoodsDetailComponent,
    TopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdCheckboxModule,
    MdRadioModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    FlexLayoutModule
  ],
  providers: [
    GoodsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
