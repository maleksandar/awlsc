import { Injectable, Inject } from '@angular/core';
import { CalculatorConfigService } from './calculator.api-cofiguration';
import { CalculatorModel } from './calculator.model';
import { MockHttpService } from './mockHttp.service';
import store from 'store';
@Injectable({ providedIn: 'root' })
export class CalculatorApiService {

    private store: StoreJsAPI;
    constructor(
        private apiConfig: CalculatorConfigService,
        private http: MockHttpService
    ) {
        this.store = store;
        
        // for demo purpose only we set the default http response from mocked service
        this.http.setDefaultResponse({ firstNumber: 1, secondNumber: 2, operation: '*'});
    }

    public async requestData(endpoint: string): Promise<CalculatorModel> {
        const url = this.apiConfig.urlResolvers[endpoint]('1234');
        const localData = this.store.get(url);

        if (localData && !this.shouldUpdate(endpoint, url)) {
            console.log('Getting cached data');
            return localData as CalculatorModel;
        } else {
            const serverData = await this.http.get(url);

            // map serverResponse to storageData here!
            this.store.set(url, serverData);
            this.store.set(`${url}_updateTime`, this.getUnixTimestamp());
            return serverData;
        }
    }

    private shouldUpdate(endpoint: string, resolvedUrl: string): boolean {
        const lastTimeUpdated = this.store.get(`${resolvedUrl}_updateTime`);
        return !lastTimeUpdated || (this.getUnixTimestamp() - this.store.get(`${resolvedUrl}_updateTime`))
            > this.apiConfig.resources[endpoint].cachingPeriod;
    }

    private getUnixTimestamp(): number {
        return (new Date()).getTime();
    }
}
