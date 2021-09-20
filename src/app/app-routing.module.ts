import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { EditusersComponent } from './editusers/editusers.component';
import { ListofusersComponent } from './listofusers/listofusers.component';

const routes: Routes = [
  {path:'createuser' , component:CreateuserComponent},
  {path:'editusers/:id', component:EditusersComponent},
  {path:'getusers', component:ListofusersComponent},
  {path:'deleteuser/:id', component:DeleteuserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
