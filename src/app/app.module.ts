import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';



import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { CrearPersonasComponent } from './crear-personas/crear-personas.component';
import { EditarPersonasComponent } from './editar-personas/editar-personas.component';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    HomeComponent,
    ListadoPersonasComponent,
    ModalComponent,
    ModalDialogComponent,
    CrearPersonasComponent,
    EditarPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
