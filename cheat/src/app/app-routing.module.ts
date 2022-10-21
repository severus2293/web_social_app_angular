import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TitleComponent} from "./pages/title/title.component";
import {RegisterComponent} from "./pages/register/register.component";
import {UserComponent} from "./pages/user/user.component";
import {FriendsComponent} from "./pages/friends/friends.component";
import {NewsComponent} from "./pages/news/news.component";
import {AdminComponent} from "./pages/admin/admin.component";

const routes: Routes = [ {path: '', component: TitleComponent},
  {path:"reg", component: RegisterComponent},
  {path: "user/:num", component:UserComponent},
  {path: "user/:num/friends", component: FriendsComponent},
  {path: "user/:num/news", component: NewsComponent},
  {path:"log", component:FriendsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
