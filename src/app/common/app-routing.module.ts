import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard }            from '../services/auth-guard.service';

/*画面遷移先を追加する場合は以下にimport追記*/
import { TopComponent }   from '../top/top.component';
import { UserRegistComponent } from '../user/userregist.component';
import { UserRegistConfirmComponent } from '../user/userregistconfirm.component';
import { UserRegistFinishComponent } from '../user/userregistfinish.component';
import { LoginComponent } from '../login/login.component';
import { LogoutComponent } from '../login/logout.component';
import { GoodsSearchComponent }      from '../goods/goodssearch.component';
import { GoodsDetailComponent }  from '../goods/goodsdetail.component';
import { GoodsRegistComponent }  from '../goods/goodsregist.component';
import { GoodsRegistConfirmComponent }  from '../goods/goodsregistconfirm.component';
import { GoodsRegistFinishComponent }  from '../goods/goodsregistfinish.component';
import { GoodsUpdateComponent }  from '../goods/goodsupdate.component';
import { GoodsUpdateConfirmComponent }  from '../goods/goodsupdateconfirm.component';
import { GoodsUpdateFinishComponent }  from '../goods/goodsupdatefinish.component';
import { RegistedGoodsSearchComponent } from '../goods/registedgoodssearch.component';
import { UserUpdateComponent } from '../user/userupdate.component';
import { UserUpdateConfirmComponent } from '../user/userupdateconfirm.component';
import { UserUpdateFinishComponent } from '../user/userupdatefinish.component';
import { UnsubscribeComponent } from '../user/unsubscribe.component';
import { UnsubscribeConfirmComponent } from '../user/unsubscribeconfirm.component';
import { UnsubscribeFinishComponent } from '../user/unsubscribefinish.component';


/*画面遷移先を追加する場合は以下に遷移時のパスと起動モジュールを定義*/
/*認証が必要なパスには「canActivate: [ AuthGuard ]」を追記*/
const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },  
  { path: 'userregist', component: UserRegistComponent},
  { path: 'userregistconfirm', component: UserRegistConfirmComponent},
  { path: 'userregistfinish', component: UserRegistFinishComponent},
  { path: 'login', component: LoginComponent }, 
  { path: 'logout', component: LogoutComponent, canActivate: [ AuthGuard ] },  
  { path: 'goodssearch',  component: GoodsSearchComponent},
  { path: 'goodsdetail/:id', component: GoodsDetailComponent},
  { path: 'goodsregist', component: GoodsRegistComponent, canActivate: [ AuthGuard ] },
  { path: 'goodsregistconfirm', component: GoodsRegistConfirmComponent, canActivate: [ AuthGuard ]},
  { path: 'goodsregistfinish', component: GoodsRegistFinishComponent, canActivate: [ AuthGuard ]},
  { path: 'goodsupdate/:id', component: GoodsUpdateComponent, canActivate: [ AuthGuard ] },
  { path: 'goodsupdateconfirm', component: GoodsUpdateConfirmComponent, canActivate: [ AuthGuard ]},
  { path: 'goodsupdatefinish', component: GoodsUpdateFinishComponent, canActivate: [ AuthGuard ]},
  { path: 'registedgoodssearch', component: RegistedGoodsSearchComponent, canActivate: [ AuthGuard ]},
  { path: 'userupdate', component: UserUpdateComponent, canActivate: [ AuthGuard ] },
  { path: 'userupdateconfirm', component: UserUpdateConfirmComponent, canActivate: [ AuthGuard ]},
  { path: 'userupdatefinish', component: UserUpdateFinishComponent, canActivate: [ AuthGuard ]},
  { path: 'unsubscribe', component: UnsubscribeComponent, canActivate: [ AuthGuard ] },
  { path: 'unsubscribeconfirm', component: UnsubscribeConfirmComponent, canActivate: [ AuthGuard ]},
  { path: 'unsubscribefinish', component: UnsubscribeFinishComponent, canActivate: [ AuthGuard ]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
