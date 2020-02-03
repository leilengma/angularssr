import { PersonsComponent } from './persons/persons.component';
import { TestComponent } from './test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/angular'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
