export class LoggingService
{
    loggChangeStatus (status : string){
        console.log('A server status changed, new status from service: ' + status);

    }
}