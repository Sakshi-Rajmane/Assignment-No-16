import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template : `
  <div>
    <h1>Addition of two numbers : {{5 | myAdd : 3}}</h1>
   <h1>Multiplication of two  numbers : {{9 | myMult : 2}}</h1>
  </div>
  `
})
export class AppComponent {
  title = 'Assignment16.2';
 
}
