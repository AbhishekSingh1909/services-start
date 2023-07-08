import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { LoggingService } from '../services/logging-service';
import { AccountService } from '../services/account-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // no need to emit because we are using account service
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  logService ?: LoggingService;
  constructor( private accountService : AccountService)
  {
    this.logService = inject(LoggingService);
  }


  onSetTo(status: string) {
    this.accountService.updateAccountSatuts(this.id, status)
    this.logService.loggChangeStatus(status);
    ;
    
    console.log('A server status changed, new status: ' + status);
  }
}
