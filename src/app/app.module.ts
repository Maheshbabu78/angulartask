import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { HttpClientModule } from '@angular/common/http';
import { ListofusersComponent } from './listofusers/listofusers.component';
import { EditusersComponent } from './editusers/editusers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
//import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    CreateuserComponent,
    ListofusersComponent,
    EditusersComponent,
    DeleteuserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    //NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
