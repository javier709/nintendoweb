import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { FooterComponent } from './component/footer/footer.component';
import { GamesComponent } from './component/games/games.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PlayComponent } from './component/play/play.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"games", component: GamesComponent},
  {path:"play", component: PlayComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"footer",component:FooterComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
