import { Component } from '@angular/core';
import { UserPassService } from '../services/userpass.service';
import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-unsubscribeconfirm',
  templateUrl: './unsubscribeconfirm.component.html',
  styleUrls: ['./unsubscribeconfirm.component.css']
})

export class UnsubscribeConfirmComponent {
  @BlockUI() blockUI: NgBlockUI;
  user : User;
  constructor(private userPassService: UserPassService, private userService : UserService, private router: Router) { 
    this.user = userPassService.getUser();
  }

  /** ユーザ削除 */
  deleteUser(): void {
    this.userService.deleteUser(+this.user.userId).subscribe(
      result => {
        this.goUnsubscribeFinish();
      },
      error => {
        alert('APIエラー')
      }
    );
  }

  /** ユーザ削除後の画面遷移 */
  goUnsubscribeFinish() {
    this.blockUI.stop();
    this.router.navigate(['unsubscribefinish']);
  }
}
