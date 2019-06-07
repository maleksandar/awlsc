import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorApiService } from './calculator/calculator.api-service';
import { CalculatorStateService } from './calculator/calculator.state-service';
import { CalculatorConfigService } from './calculator/calculator.api-cofiguration';
import { MockHttpService } from './calculator/mockHttp.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CalculatorApiService,
    CalculatorStateService,
    CalculatorConfigService,
    MockHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
