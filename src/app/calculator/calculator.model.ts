export type CalculatorOperation = '+' | '-' | '*';

export interface CalculatorModel {
    firstNumber: number;
    secondNumber: number;
    operation: CalculatorOperation;
    result?: number;
}
