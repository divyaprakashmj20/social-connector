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
import { GraphContainerComponent } from './pages/content/results/graph-container/graph-container.component';
import {HttpClientModule} from '@angular/common/http';


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
    GraphContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppvMaterialsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
