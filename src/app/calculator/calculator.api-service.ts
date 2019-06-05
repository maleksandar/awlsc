import { Injectable, Inject } from '@angular/core';
import { CalculatorConfigService } from './calculator.api-cofiguration';
import { CalculatorModel } from './calculator.model';
import { MockHttpService } from './mockHttp.service';

@Injectable({ providedIn: 'root' })
export class CalculatorApiService {

    private lastUpdatedTimestamp: number;
    constructor(
        private apiConfig: CalculatorConfigService,
        private http: MockHttpService<CalculatorModel>
    ) {
            this.lastUpdatedTimestamp = 0;
            this.http.setDefaultResponse({ firstNumber: 1, secondNumber: 2, operation: '*'});
    }

    public async requestData(url: string): Promise<CalculatorModel> {
        const localData = localStorage.getItem(url);

        if (localData && !this.shouldUpdate()) {
            console.log('Getting cached data');
            return JSON.parse(localData) as CalculatorModel;
        } else {
            const serverData = await this.http.get(this.apiConfig.baseUrl);
            // map serverResponse to storageData here!
            localStorage.setItem(url, JSON.stringify(serverData));
            this.lastUpdatedTimestamp = this.getUnixTimestamp();
            return serverData;
        }
    }

    private shouldUpdate(): boolean {
        return (this.getUnixTimestamp() - this.lastUpdatedTimestamp) > this.apiConfig.cachingPeriod;
    }

    private getUnixTimestamp(): number {
        return (new Date()).getTime();
    }
}
