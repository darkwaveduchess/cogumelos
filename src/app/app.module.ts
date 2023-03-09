import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CogumeloListComponent } from './cogumelo-list/cogumelo-list.component';
import { CogumeloCardComponent } from './cogumelo-card/cogumelo-card.component';
import { CogumeloService } from 'src/_services/cogumelo.service';
import { HttpClientModule } from  '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    CogumeloListComponent,
    CogumeloCardComponent,
    HeaderComponent,
    NewsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    CogumeloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
