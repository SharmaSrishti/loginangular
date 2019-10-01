import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'} ,
  { path: 'login', component: FirstComponent },  // you must add your component here
  { path: 'user', component: UserComponent }  // you must add your component here

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
