import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonasService } from '../personas.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Persona } from '../interfaces/persona.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-personas',
  templateUrl: './editar-personas.component.html',
  styleUrls: ['./editar-personas.component.css'],
})
export class EditarPersonasComponent implements OnInit {
  
  hide = true;

  constructor(
    private activerouter: ActivatedRoute,
    private personaService: PersonasService,
    private location: Location
  ) {}

  editarForm = new FormGroup({
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

  ngOnInit(): void {
    const id: string | null = this.activerouter.snapshot.paramMap.get('id');

    this.personaService.getPersonaById(id).subscribe((data) => {
      this.editarForm.setValue({
        user: data.user,
        password: data.password,
        name: data.name,
        surname: data.surname,
        companyEmail: data.companyEmail,
        personalEmail: data.personalEmail,
        city: data.city,
        activate: data.activate,
        createdDate: data.createdDate,
        imagenUrl: data.imagenUrl,
        terminationDate: data.terminationDate,
      });
    });
  }

putForm(form: Persona){
    this.personaService.editarPersona(this.activerouter.snapshot.paramMap.get('id'), form)
      .subscribe(data =>{
    })
    this.location.back()
  }

  volverBtn(){
    this.location.back()
  }
}