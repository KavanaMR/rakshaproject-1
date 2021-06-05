import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { BikeInsuranceComponent } from './bike-insurance/bike-insurance.component';
import { CarInsuranceComponent } from './car-insurance/car-insurance.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PaymentGatewayComponent } from './payment-gateway/payment-gateway.component';
import { NotifyComponent } from './notify/notify.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DownloadInsuranceComponent } from './download-insurance/download-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    GetQuoteComponent,
    BikeInsuranceComponent,
    CarInsuranceComponent,
    InsuranceComponent,
    PersonalDetailsComponent,
    PaymentGatewayComponent,
    NotifyComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    DownloadInsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
