import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging-service";
@Injectable()

export class AccountService
{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();
      constructor(private loggingService : LoggingService){}

      addAccount(name :string , status : string){
        this.accounts.push({name,status});
        //loging account status into account service 
        this.loggingService.loggChangeStatus(status);
      }

      updateAccountSatuts(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
        //loging account status into account service 
        this.loggingService.loggChangeStatus(newStatus);
        // emit an event in account service but we want to emit in one component and catch it in other component.
        this.statusUpdated.emit(newStatus);
      }
}