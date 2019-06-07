import { Injectable } from '@angular/core';
import { CalculatorModel, CalculatorOperation } from './calculator.model';

@Injectable({ providedIn: 'root' })
export class MockHttpService {
    constructor() { }
    private response: CalculatorModel = null;

    public setDefaultResponse(response: CalculatorModel) {
        this.response = response;
    }
    public async get(url: string): Promise<CalculatorModel> {
        console.log('Sending http request to the server!');
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(this.randomResponse), 1000);
        });
    }

    private get randomResponse(): CalculatorModel {
        return {
            firstNumber: Math.round(Math.random() * 10),
            secondNumber: Math.round(Math.random() * 10 + 5),
            operation: ['+', '-', '*'][Math.floor(Math.random() * 3)] as CalculatorOperation,
        };
    }
}
