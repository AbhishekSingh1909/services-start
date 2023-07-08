import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging-service';
import { AccountService } from '../services/account-service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers : [LoggingService]
})
export class NewAccountComponent {
  
  constructor(private log :LoggingService, private accountService : AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
     
     this.log.loggChangeStatus(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
