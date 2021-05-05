import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompaniesComponent } from './public/all-companies/all-companies.component';
import { BuildingEquipmentsComponent } from './public/building-equipments/building-equipments.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { TenderComponent } from './public/tender/tender.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tenders', component: TenderComponent },
  { path: 'companies', component: AllCompaniesComponent },
  { path: 'building-equipments', component: BuildingEquipmentsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
