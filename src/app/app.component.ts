import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div>
      <h1>{{ 6 | marvellousChk : 'prime' }}</h1> 
      <h1>{{ 4 | marvellousChk: 'perfect' }}</h1>
      <h1>{{ 4 | marvellousChk: 'even' }}</h1>
      <h1>{{ 9 | marvellousChk: 'odd' }}</h1>
  </div>
  `
 
})
export class AppComponent {
  title = 'Assignment16.3';
}
