import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { UserComponent } from './user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import { DetailsComponent } from './details/details.component';
import {DetailServiceService} from './detail-service.service';
import { SumComponent } from './sum/sum.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'} ,
  { path: 'login', component: FirstComponent },  // you must add your component here
  { path: 'user', component: UserComponent }  // you must add your component here

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    UserComponent,
    DetailsComponent,
    SumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [DetailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
