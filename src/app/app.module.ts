import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeToggleBarComponent } from './components/theme-toggle-bar/theme-toggle-bar.component';
import { ExtensionsMenuComponent } from './components/extensions-menu/extensions-menu.component';
import { ExtensionCardComponent } from './components/extension-card/extension-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleBarComponent,
    ExtensionsMenuComponent,
    ExtensionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
