import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { PersonasService } from '../personas.service';

const personasMock: Persona[] = [
  {idPersona:'1', user: 'Man', password:'seguro', name:'Manuel', surname: 'Hernández',companyEmail:'mh@company.com', personalEmail: 'mh@personal.com',
  city:'Madrid', activate: true, createdDate:'01-01-2020', imagenUrl: 'imagen',terminationDate:'01-01-2021'},
  {idPersona:'2', user: 'Car', password:'seguro', name:'Carlos', surname: 'Montero',companyEmail:'cm@company.com', personalEmail: 'mh@personal.com',
  city:'Madrid', activate: false, createdDate:'01-01-2020', imagenUrl: 'imagen',terminationDate:'01-01-2021'},
  {idPersona:'3', user: 'Jul', password:'seguro', name:'Julio', surname: 'Hernández',companyEmail:'jh@company.com', personalEmail: 'jh@personal.com',
  city:'Madrid', activate: true, createdDate:'01-01-2020', imagenUrl: 'imagen',terminationDate:'01-01-2021'},
  {idPersona:'4', user: 'Ang', password:'seguro', name:'Angel', surname: 'Montero',companyEmail:'am@company.com', personalEmail: 'am@personal.com',
  city:'Madrid', activate: false, createdDate:'01-01-2020', imagenUrl: 'imagen',terminationDate:'01-01-2021'},
]

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})


export class ListadoPersonasComponent implements OnInit {

  displayedColumns: string[] = ['idPersona', 'user', 'password', 'name', 'surname', 'companyEmail', 'personalEmail',
  'city', 'activate', 'createdDate', 'imagenUrl','terminationDate']
  dataSource = personasMock;
  personas: Persona[] = [];
  

  constructor( private personaSerice:PersonasService) { }

  ngOnInit(): void {
    this.personaSerice.getAllPersonas()
      .subscribe(data => {
        console.log('Datos de Api');
        console.log(data);
      })
  }

}
