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
import { FancyImageUploaderModule } from 'ng2-fancy-image-uploader';


/* コンポーネントを追加する場合は以下import追加 */
import { AppComponent } from './app.component';
import { TopComponent }   from './top/top.component';
import { UserRegistComponent } from './user/userregist.component';
import { UserRegistConfirmComponent } from './user/userregistconfirm.component';
import { UserRegistFinishComponent } from './user/userregistfinish.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { GoodsSearchComponent }      from './goods/goodssearch.component';
import { GoodsDetailComponent }  from './goods/goodsdetail.component';
import { GoodsRegistComponent }  from './goods/goodsregist.component';
import { GoodsRegistConfirmComponent }  from './goods/goodsregistconfirm.component';
import { GoodsRegistFinishComponent }  from './goods/goodsregistfinish.component';
import { GoodsUpdateComponent }  from './goods/goodsupdate.component';
import { GoodsUpdateConfirmComponent }  from './goods/goodsupdateconfirm.component';
import { GoodsUpdateFinishComponent }  from './goods/goodsupdatefinish.component';
import { RegistedGoodsSearchComponent } from './goods/registedgoodssearch.component';
import { UserUpdateComponent } from './user/userupdate.component';
import { UserUpdateConfirmComponent } from './user/userupdateconfirm.component';
import { UserUpdateFinishComponent } from './user/userupdatefinish.component';
import { UnsubscribeComponent } from './user/unsubscribe.component';
import { UnsubscribeConfirmComponent } from './user/unsubscribeconfirm.component';
import { UnsubscribeFinishComponent } from './user/unsubscribefinish.component';
import { HeaderComponent } from './common/header.component';



//商品情報取得用service
import { GoodsService } from './services/goods.service';
import { GoodsPassService } from './services/goodspass.service';
//ユーザ情報取得用service
import { UserService } from './services/user.service';
import { UserPassService } from './services/userpass.service';

//認証情報取得用service
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
  /* コンポーネントを追加する場合は以下に追加 */
  declarations: [
    AppComponent,
    TopComponent,
    UserRegistComponent,
    UserRegistConfirmComponent,
    UserRegistFinishComponent,
    LoginComponent,
    LogoutComponent,
    GoodsSearchComponent,
    GoodsDetailComponent,
    GoodsRegistComponent,
    GoodsRegistConfirmComponent,
    GoodsRegistFinishComponent,
    GoodsUpdateComponent,
    GoodsUpdateConfirmComponent,
    GoodsUpdateFinishComponent,
    RegistedGoodsSearchComponent,
    UserUpdateComponent,
    UserUpdateConfirmComponent,
    UserUpdateFinishComponent,
    UnsubscribeComponent,
    UnsubscribeConfirmComponent,
    UnsubscribeFinishComponent,
    HeaderComponent,
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
    BlockUIModule,
    FancyImageUploaderModule
  ],
  providers: [
    GoodsService,
    GoodsPassService,
    UserService,
    UserPassService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
