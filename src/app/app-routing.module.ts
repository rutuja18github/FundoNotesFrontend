import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './Components/reset-password/reset-password.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {CreateNoteComponent} from './Components/create-note/create-note.component';
import {IconComponent} from './Components/icon/icon.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';
import {ArchiveNoteComponent} from './Components/archive-note/archive-note.component'
import {TrashNoteComponent } from './Components/trash-note/trash-note.component'
import { AuthenticationGuard} from './AuthGuard/authentication.guard'

const routes: Routes = [
  {path:'', redirectTo:"/login",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotPassword' ,component:ForgotPasswordComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent ,canActivate:[AuthenticationGuard],
  children:[
    {path:'notes',component:GetAllNoteComponent},
    {path:'archive',component:ArchiveNoteComponent},
    {path:'trash',component:TrashNoteComponent}
  ]   
},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
