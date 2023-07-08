import { Component,OnInit } from '@angular/core';
import { AccountService } from './services/account-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AccountService] // account service is available to all child component like account
})
export class AppComponent implements OnInit {
  accounts : {name : string, status : string} [] = []
  constructor(private accountService : AccountService){

  }
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
