import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*画面遷移先を追加する場合は以下にimport追記*/
import { TopComponent }   from '../top/top.component';
import { GoodsListComponent }      from '../goods/goodslist.component';
import { GoodsDetailComponent }  from '../goods/goodsdetail.component';
import { GoodsRegistComponent }  from '../goods/goodsregist.component';
import { GoodsConfirmComponent }  from '../goods/goodsconfirm.component';
import { GoodsFinishComponent }  from '../goods/goodsfinish.component';




/*画面遷移先を追加する場合は以下に遷移時のパスと起動モジュールを定義*/
const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top',  component: TopComponent },
  { path: 'goodslist',  component: GoodsListComponent },
  { path: 'goodsdetail/:id', component: GoodsDetailComponent },
  { path: 'goodsregist', component: GoodsRegistComponent },
  { path: 'goodsconfirm', component: GoodsConfirmComponent},
  { path: 'goodsfinish', component: GoodsFinishComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
