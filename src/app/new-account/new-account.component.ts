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
  
  constructor(private log :LoggingService, private accountService : AccountService){
    // suscribe event emit to catch data here
    this.accountService.statusUpdated.subscribe((status :string) => alert('new status : '+ status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
     // now we will log into account service, because we can access or inject log service into account service
    // this.log.loggChangeStatus(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
