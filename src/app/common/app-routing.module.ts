import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*画面遷移先を追加する場合は以下にimport追記*/
import { TopComponent }   from '../top/top.component';
import { GoodsListComponent }      from '../goods/goodslist.component';
import { GoodsDetailComponent }  from '../goods/goodsdetail.component';

/*画面遷移先を追加する場合は以下に遷移時のパスと起動モジュールを定義*/
const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top',  component: TopComponent },
  { path: 'goodslist',  component: GoodsListComponent },
  { path: 'goodsdetail/:id', component: GoodsDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/