import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './components/headercomponent/headercomponent.component';
import { FootercomponentComponent } from './components/footercomponent/footercomponent.component';
import { ContentcomponentComponent } from './components/contentcomponent/contentcomponent.component';
import { SectioncomponentComponent } from './components/sectioncomponent/sectioncomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    ContentcomponentComponent,
    SectioncomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
