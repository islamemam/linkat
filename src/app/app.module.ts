import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { HomeComponent } from './public/home/home.component';
import { SliderComponent } from './public/home/slider/slider.component';
import { TendersComponent } from './public/home/tenders/tenders.component';
import { CompaniesComponent } from './public/home/companies/companies.component';
import { EquipmentsComponent } from './public/home/equipments/equipments.component';
import { FilterComponent } from './public/home/filter/filter.component';
import { AddJobComponent } from './public/home/add-job/add-job.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PagesComponent } from './public/pages/pages.component';
import { TenderComponent } from './public/tender/tender.component';
import { AllCompaniesComponent } from './public/all-companies/all-companies.component';
import { BuildingEquipmentsComponent } from './public/building-equipments/building-equipments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    TendersComponent,
    CompaniesComponent,
    EquipmentsComponent,
    FilterComponent,
    AddJobComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent,
    TenderComponent,
    AllCompaniesComponent,
    BuildingEquipmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
