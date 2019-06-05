import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorApiService } from './calculator/calculator.api-service';
import { CalculatorStoreService } from './calculator/calculator.store-service';
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
    CalculatorStoreService,
    CalculatorConfigService,
    MockHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
