import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OutComponent } from './out/out.component';
import { RegisterComponent } from './register/register.component';
import { ShowstudComponent } from './showstud/showstud.component';
import { Use1Component } from './use1/use1.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'add',component:AddComponent},
  {path:'show',component:ShowstudComponent},
  {path:'out',component:Use1Component},
  {path:'dis',component:OutComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
