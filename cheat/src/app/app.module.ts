import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrokersComponent } from './brokers/brokers.component';
import { SettingsComponent } from './settings/settings.component';
import { TitleComponent } from './pages/title/title.component';
import {AppRoutingModule} from './app-routing.module';
import {RegisterComponent} from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { NewsComponent } from './pages/news/news.component';
import { AdminComponent } from './pages/admin/admin.component';





@NgModule({
  declarations: [
    AppComponent,
    BrokersComponent,
    RegisterComponent,
    TitleComponent,
    UserComponent,
    FriendsComponent,
    NewsComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
