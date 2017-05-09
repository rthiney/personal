import { Injectable } from '@angular/core';
@Injectable()
export class LoggerService {
    logs: string[] = [];
    event(msg: any) { (<any>window).appInsights.trackEvent(msg); this.log(`EVENT: ${msg}`, false);  }
    view(msg: any) { (<any>window).appInsights.trackPageView(msg); this.log(`PAGEVIEW: ${msg}`, false ); }
    error(msg: any) { (<any>window).appInsights.trackException(msg); this.log(msg, true); }
    console(msg: any, obj?: any) { obj ? console.log(msg, obj) : console.log(msg); }

      constructor( ) {

    }
    private log(msg: any, isErr = false)    {
        this.logs.push(msg);
        isErr ? console.error(msg) : console.log(msg);
    }
}
