import { Component, OnInit } from '@angular/core';
import { CalculatorStateService } from './calculator.state-service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CalculatorModel } from './calculator.model';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  private readonly state$: Observable<CalculatorModel> = this.calculatorStateService.state$;
  public readonly firstNumber = this.state$.pipe(map(state => state.firstNumber));
  public readonly secondNumber = this.state$.pipe(map(state => state.secondNumber));
  public readonly operation = this.state$.pipe(map(state => state.operation));


  ngOnInit(): void {
  }

  constructor(private calculatorStateService: CalculatorStateService) {

  }

  updateFromServer() {
    this.calculatorStateService.updateStateFromTheServer();
  }

  updateFirstNumber(value: number) {
    console.log('updating firstNumber to ', value);
    this.calculatorStateService.enterFirstNumber(value);
  }

  updateSecondNumber(value: number) {
    console.log('updating secondNumber to ', value);
    this.calculatorStateService.enterSecondNumber(value);
  }

  get result(): number {
    const { firstNumber, secondNumber, operation } = this.calculatorStateService.state;
    if (operation === '*') {
      return firstNumber * secondNumber;
    } else if (operation === '+') {
      return firstNumber + secondNumber;
    } else if (operation === '-') {
      return firstNumber - secondNumber;
    } else {
      return NaN;
    }
  }
}
