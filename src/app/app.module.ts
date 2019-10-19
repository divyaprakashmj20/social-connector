import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ContentComponent } from './pages/content/content.component';
import { TopbarComponent } from './pages/content/topbar/topbar.component';
import { AppvMaterialsModule } from './modules/appv-materials/appv-materials.module';
import { ResultsComponent } from './pages/content/results/results.component';
import { PostsComponent } from './pages/content/results/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    TopbarComponent,
    ContentComponent,
    ResultsComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppvMaterialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
