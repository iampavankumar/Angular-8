import { FormsModule, ReactiveFormsModule } from '@angular/forms';//for angular forms
import { EmployeeModule } from './employee/employee.module';
import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';//for browser suppport
import { NgModule } from '@angular/core';//
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LanguagesComponent } from './languages/languages.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoudComponent } from './pagenotfoud/pagenotfoud.component';//root component
import {RouterModule,Router} from '@angular/router'
// for customDirective
import { customDirective } from './custom.directive';
import { Custom1Directive } from './custom1.directive';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiservicesComponent } from './apiservices/apiservices.component';
import { EmailComponent } from './email/email.component';
import { HttpdataComponent } from './httpdata/httpdata.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipe } from './custom.pipe';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LanguagesComponent,
    UsersComponent,
    HomeComponent,
    PagenotfoudComponent,
    customDirective,
    Custom1Directive,
    SignupComponent,
    ApiservicesComponent,
    EmailComponent,
    HttpdataComponent,
    PipesComponent,
    CustomPipe,
    FilterPipe

  ],//components,directives,pipes are registered in declrations
  imports: [
    BrowserModule,
    EmployeeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:"apiservices",component:ApiservicesComponent},
      {path:"email",component:EmailComponent},
      {path:"httpdata",component:HttpdataComponent},
      {path:"pipes",component:PipesComponent},
      {path:'**',component:PagenotfoudComponent}
    ])
  ],//modules ex:formsModule,RouterModule,reactiveforModule
  providers: [],//services
  bootstrap: [AppComponent]//bootstarp purpusing
})
export class AppModule { }  
