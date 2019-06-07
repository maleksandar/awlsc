import { Component, OnInit } from '@angular/core';
import { CalculatorStateService } from './calculator.state-service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  private readonly state$ = this.calculatorStateService.state$;

  ngOnInit(): void {
  }

  constructor(private calculatorStateService: CalculatorStateService) {

  }

  updateFromServer() {
    this.calculatorStateService.updateStateFromTheServer();
  }

  updateFirstNumber(value) {
    console.log('updating firstNumber to ', value);
    this.calculatorStateService.enterFirstNumber(value);
  }

  updateSecondNumber(value) {
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
