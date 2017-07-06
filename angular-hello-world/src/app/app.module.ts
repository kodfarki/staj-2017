import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {Routes, RouterModule} from "@angular/router";
import { ContactComponent } from './contact/contact.component';
import {LoginService} from "./login.service";
import {FormsModule} from "@angular/forms";

const ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
];

@NgModule({
  declarations: [
    LayoutComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES)
  ],
  providers: [LoginService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
