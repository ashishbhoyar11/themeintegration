import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeModule } from './home/home.module';
import {PropertyModule} from './property/property.module';
import {AdminModule} from './admin/admin.module';

import {MyserviceService } from './services/myservice.service';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BnNgIdleService } from 'bn-ng-idle'; // import bn-ng-idle service


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    PropertyModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    BnNgIdleService,
    MyserviceService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
