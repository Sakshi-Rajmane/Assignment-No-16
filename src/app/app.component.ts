import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  template: `
   <div>
      <h3>Output from Test Cases:</h3>
      <div>{{ countCapitalOutput }}</div>
      <div>{{ checkPasswordOutput }}</div>
      <div>{{ arrayAdditionOutput }}</div>
    </div>
  `
})
export class AppComponent {
  countCapitalOutput: string = "";
  checkPasswordOutput: string = "";
  arrayAdditionOutput: string = "";

  constructor(private appService: AppService) {
    this.runTestCases();
  }

  runTestCases() {
    const countCapitalResult = this.appService.CountCapital('Hello World');
    this.countCapitalOutput = `Count of capital letters: ${countCapitalResult}`;

    const validPassword = 'Abcd12@';
    const invalidPassword = 'abc123';

    const isValidPassword = this.appService.CheckPassword(validPassword);
    const isInvalidPassword = this.appService.CheckPassword(invalidPassword);

    this.checkPasswordOutput = `Is valid password: ${isValidPassword}`;

    const arrayAdditionResult = this.appService.ArrayAddition([1, 2, 3, 4, 5]);
    this.arrayAdditionOutput = `Sum of array elements: ${arrayAdditionResult}`;
  }
}
