import { Component, OnInit } from '@angular/core';
import { CalculatorStoreService } from './calculator.store-service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  private readonly state$ = this.calculatorStoreService.state$;

  ngOnInit(): void {
  }

  constructor(private calculatorStoreService: CalculatorStoreService) {

  }

  updateFromServer() {
    this.calculatorStoreService.updateStateFromTheServer();
  }

  updateFirstNumber(value) {
    console.log('updating firstNumber to ', value);
    this.calculatorStoreService.enterFirstNumber(value);
  }

  updateSecondNumber(value) {
    console.log('updating secondNumber to ', value);
    this.calculatorStoreService.enterSecondNumber(value);
  }
}
