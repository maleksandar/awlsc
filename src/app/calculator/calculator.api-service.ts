import { Injectable, Inject } from '@angular/core';
import { CalculatorConfigService } from './calculator.api-cofiguration';
import { CalculatorModel } from './calculator.model';
import { MockHttpService } from './mockHttp.service';
import store from 'store';
@Injectable({ providedIn: 'root' })
export class CalculatorApiService {

    private lastUpdatedTimestamp: number;
    constructor(
        private apiConfig: CalculatorConfigService,
        private http: MockHttpService<CalculatorModel>
    ) {
            this.lastUpdatedTimestamp = 0;

            // for demo purpose only we set the default http response from mocked service
            this.http.setDefaultResponse({ firstNumber: 1, secondNumber: 2, operation: '*'});
    }

    public async requestData(endpoint: string): Promise<CalculatorModel> {
        // tslint:disable-next-line:no-string-literal
        const baseUrl = this.apiConfig.resources[endpoint].baseUrl;
        const localData = store.get(baseUrl);

        if (localData && !this.shouldUpdate(endpoint)) {
            console.log('Getting cached data');
            return localData as CalculatorModel;
        } else {
            const serverData = await this.http.get(baseUrl);
            // map serverResponse to storageData here!
            store.set(baseUrl, serverData);
            this.lastUpdatedTimestamp = this.getUnixTimestamp();
            return serverData;
        }
    }

    private shouldUpdate(endpoint): boolean {
        return (this.getUnixTimestamp() - this.lastUpdatedTimestamp)
            > this.apiConfig.resources[endpoint].cachingPeriod;
    }

    private getUnixTimestamp(): number {
        return (new Date()).getTime();
    }
}
