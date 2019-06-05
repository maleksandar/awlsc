import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalculatorConfigService {
    constructor() {
    }

    readonly baseUrl = 'https://calculator.com/api';
    readonly cachingPeriod = 5000;
}
