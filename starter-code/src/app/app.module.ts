import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router"

import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponentComponent },
  { path: 'movie/:id', component: MovieComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    MovieComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
