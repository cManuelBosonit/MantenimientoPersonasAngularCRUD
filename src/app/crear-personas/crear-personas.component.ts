import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../personas.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Persona } from '../interfaces/persona.interface';
import { Location } from '@angular/common';


@Component({
  selector: 'app-crear-personas',
  templateUrl: './crear-personas.component.html',
  styleUrls: ['./crear-personas.component.css']
})
export class CrearPersonasComponent implements OnInit {

  hide = true;

  crearForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    companyEmail: new FormControl(''),
    personalEmail: new FormControl(''),
    city: new FormControl(''),
    activate: new FormControl(''),
    createdDate: new FormControl(''),
    imagenUrl: new FormControl(''),
    terminationDate: new FormControl(''),
  });

  constructor(
          private personaService: PersonasService,
          private location: Location
          ) { }

  ngOnInit(): void {
  }

  postForm(form: Persona){
    this.personaService.addPersona(form).subscribe( data => {
    });
    this.location.back()
  }

  volverBtn(){
    this.location.back()
  }

}