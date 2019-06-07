import { CalculatorApiService } from './calculator.api-service';
import { Observable, BehaviorSubject } from 'rxjs';
import { CalculatorModel } from './calculator.model';
import { CalculatorConfigService } from './calculator.api-cofiguration';
import { Injectable } from '@angular/core';

class Store<T> {
    state$: Observable<T>;

    // tslint:disable-next-line:variable-name
    private _state$: BehaviorSubject<T>;

    protected constructor(initialState: T) {
        this._state$ = new BehaviorSubject(initialState);
        this.state$ = this._state$.asObservable();
    }

    get state(): T {
        return this._state$.getValue();
    }

    setState(nextState: T): void {
        this._state$.next(nextState);
    }
}

@Injectable({ providedIn: 'root' })
export class CalculatorStateService extends Store<CalculatorModel> {
    constructor(
        private api: CalculatorApiService
    ) {
        super({ firstNumber: 0, secondNumber: 0, operation: '+' });
    }

    enterFirstNumber(value: number) {
        console.log('setting first number');
        this.setState({...this.state, firstNumber: value });
    }

    enterSecondNumber(value: number) {
        console.log('setting second number');
        this.setState({...this.state, secondNumber: value });
    }

    async updateStateFromTheServer() {
        const endpoint = 'dataEndpoint';
        const serverResponse = await this.api.requestData(endpoint);
        this.setState(serverResponse);
    }
}
