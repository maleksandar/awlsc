import { Injectable } from '@angular/core';

interface DataEndpointConfiguration {
    readonly baseUrl: string;
    readonly cachingPeriod: number;
}

interface Resources { [key: string]: DataEndpointConfiguration; }

@Injectable({ providedIn: 'root' })
export class CalculatorConfigService {
    constructor() {
    }

    public resources: Resources = {
        dataEndpoint: {
            baseUrl: 'https://calculator.com/api',
            cachingPeriod: 10000
        }
    };

    public urlResolvers = {
        dataEndpoint: (userId: string) => `${this.resources.dataEndpoint.baseUrl}/${userId}`
    };
}
