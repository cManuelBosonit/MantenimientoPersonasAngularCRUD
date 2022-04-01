import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})

export class ListadoPersonasComponent implements OnInit {

  displayedColumns: string[] = ['idPersona', 'user', 'password', 'name', 'surname', 'companyEmail', 'personalEmail',
  'city', 'activate', 'createdDate', 'imagenUrl','terminationDate']
  personas: Persona[] = [];
  value = 'Nombre Usuario';
  

  constructor( private personaSerice:PersonasService) { }

  ngOnInit(): void {
    this.personaSerice.getAllPersonas()
      .subscribe(data => {
        this.personas = data;
      })
  }

  filterByName( name: string ){
    this.personaSerice.getPersonaByName(name)
      .subscribe(data => {
        console.log(data);
        this.personas = data;
      })
  }

}
