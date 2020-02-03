import { TestComponent } from './test/test.component';
import { PersonsComponent } from './persons/persons.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "persons", component: PersonsComponent},
  {path: "test", component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
