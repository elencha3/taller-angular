import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbCarouselModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ImagesComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule, //Empaquetado el carrousel
    FormsModule, //Los controles del formulario
    ReactiveFormsModule,
    NgbAccordionModule,
    NgbPaginationModule,
  ]
})
export class ComponentsModule { }
