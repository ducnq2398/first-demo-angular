import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewInComponent } from './new-in/new-in.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path:'new-in', component: NewInComponent},
  {path: 'signin', component: SigninComponent},
  {path:'', redirectTo: '/new-in', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
