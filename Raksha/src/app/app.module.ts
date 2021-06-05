import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetquotesComponent } from './getquotes/getquotes.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { NotifyComponent } from './notify/notify.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    GetquotesComponent,
    BikeInsuranceComponent,
    CarInsuranceComponent,
    InsuranceComponent,
    PersonalDetailsComponent,
    PaymentGatewayComponent,
    NotifyComponent,
    UserloginComponent,
    AdminloginComponent,
    UserdashboardComponent,
    AdmindashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
