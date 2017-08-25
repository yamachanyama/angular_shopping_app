import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*画面遷移先を追加する場合は以下にimport追記*/
import { TopComponent }   from '../top/top.component';
import { UserRegistComponent } from '../user/userregist.component';
import { UserRegistFinishComponent } from '../user/userregistfinish.component';
import { LoginComponent } from '../login/login.component';
import { GoodsSearchComponent }      from '../goods/goodssearch.component';
import { GoodsDetailComponent }  from '../goods/goodsdetail.component';
import { GoodsRegistComponent }  from '../goods/goodsregist.component';
import { GoodsRegistConfirmComponent }  from '../goods/goodsregistconfirm.component';
import { GoodsRegistFinishComponent }  from '../goods/goodsregistfinish.component';
import { RegistedGoodsSearchComponent } from '../goods/registedgoodssearch.component';
import { UserUpdateComponent } from '../user/userupdate.component';
import { UserUpdateConfirmComponent } from '../user/userupdateconfirm.component';
import { UserUpdateFinishComponent } from '../user/userupdatefinish.component';
import { UnsubscribeComponent } from '../user/unsubscribe.component';
import { UnsubscribeConfirmComponent } from '../user/unsubscribeconfirm.component';
import { UnsubscribeFinishComponent } from '../user/unsubscribefinish.component';


/*画面遷移先を追加する場合は以下に遷移時のパスと起動モジュールを定義*/
const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },  
  { path: 'userregist', component: UserRegistComponent},
  { path: 'userregistfinish', component: UserRegistFinishComponent},
  { path: 'login', component: LoginComponent },  
  { path: 'goodssearch',  component: GoodsSearchComponent },
  { path: 'goodsdetail/:id', component: GoodsDetailComponent },
  { path: 'goodsregist', component: GoodsRegistComponent },
  { path: 'goodsregistconfirm', component: GoodsRegistConfirmComponent},
  { path: 'goodsregistfinish', component: GoodsRegistFinishComponent},
  { path: 'registedgoodssearch', component: RegistedGoodsSearchComponent},
  { path: 'userupdate', component: UserUpdateComponent },
  { path: 'userupdateconfirm', component: UserUpdateConfirmComponent},
  { path: 'userupdatefinish', component: UserUpdateFinishComponent},
  { path: 'unsubscribe', component: UnsubscribeComponent },
  { path: 'unsubscribeconfirm', component: UnsubscribeConfirmComponent},
  { path: 'unsubscribefinish', component: UnsubscribeFinishComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
