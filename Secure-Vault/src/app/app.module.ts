import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurePhotosComponent } from './secure-photos/secure-photos.component';
import { SecureFileComponent } from './secure-file/secure-file.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { SvHeaderComponent } from './sv-header/sv-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SecurePhotosComponent,
    SecureFileComponent,
    LandingPageComponent,
    SvHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
