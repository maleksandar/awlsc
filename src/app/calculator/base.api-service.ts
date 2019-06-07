// import { Injectable, Inject } from '@angular/core';
// import { CalculatorConfigService } from './calculator.api-cofiguration';
// import { CalculatorModel } from './calculator.model';
// import { MockHttpService } from './mockHttp.service';
// import store from 'store';
// @Injectable({ providedIn: 'root' })
// export class BaseApiService {

//     protected lastUpdatedTimestamp: number;
//     constructor(
//         private apiConfig: CalculatorConfigService,
//         private http: MockHttpService<CalculatorModel>
//     ) {
//             this.lastUpdatedTimestamp = 0;

//             // for demo purpose only we set the default http response from mocked service
//             this.http.setDefaultResponse({ firstNumber: 1, secondNumber: 2, operation: '*'});
//     }å

//     public async requestData(): Promise<CalculatorModel> {
//         const baseUrl = this.apiConfig.resources.firstResource.baseUrl;
//         const localData = store.get(baseUrl);

//         if (localData && !this.shouldUpdate()) {
//             console.log('Getting cached data');
//             return localData as CalculatorModel;
//         } else {
//             const serverData = await this.http.get(baseUrl);
//             // map serverResponse to storageData here!
//             store.set(baseUrl, serverData);
//             this.lastUpdatedTimestamp = this.getUnixTimestamp();
//             return serverData;
//         }
//     }

//     private shouldUpdate(): boolean {
//         return (this.getUnixTimestamp() - this.lastUpdatedTimestamp)
//             > this.apiConfig.resources.firstResource.cachingPeriod;
//     }

//     private getUnixTimestamp(): number {
//         return (new Date()).getTime();
//     }
// }
