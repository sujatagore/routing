import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { UserFormComponent } from './shared/components/users/user-form/user-form.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './shared/components/auth/auth.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { FaircardsComponent } from './shared/components/fairs/faircards/faircards.component';
import { FairsdetailsComponent } from './shared/components/fairs/fairsdetails/fairsdetails.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    PagenotfoundComponent,
    UserComponent,
    UserFormComponent,
    ProductComponent,
    ProductFormComponent,
    AuthComponent,
    FairsComponent,
    FaircardsComponent,
    FairsdetailsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
