import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyMultPipe } from './my-mult.pipe';
import { MyAddPipe } from './my-add.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyMultPipe,
    MyAddPipe
  ],
  exports : [
    MyAddPipe,
    MyMultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
