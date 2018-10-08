import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { BtnFloatComponent } from './components/btn-float/btn-float.component';
import { ContainerPhotoComponent } from './components/container-photo/container-photo.component';
import { ModalPhotoComponent } from './components/modal-photo/modal-photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    BtnFloatComponent,
    ContainerPhotoComponent,
    ModalPhotoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
