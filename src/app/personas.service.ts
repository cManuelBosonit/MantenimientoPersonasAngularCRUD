import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  url:string = "http://localhost:3000"

  constructor( private http:HttpClient) { }

  getAllPersonas():Observable<Persona[]>{
    const completeUrl = `${this.url}/personas`;
    return this.http.get<Persona[]>(completeUrl); 
  }

  getPersonaByName(name: string):Observable<Persona[]>{
    const completeUrl = `${this.url}/personas/?name=${name}`;
    return this.http.get<Persona[]>(completeUrl); 
  }

  getPersonaById(id: string | null):Observable<Persona>{
    const completeUrl = `${this.url}/personas/${id}`;
    return this.http.get<Persona>(completeUrl); 
  }

  deleteById(id: number):Observable<Persona>{
    const completeUrl = `${this.url}/personas/${id}`
    return this.http.delete<Persona>(completeUrl); 
  }

  editarPersona(id: any, form:Persona):Observable<Persona>{
    const completeUrl = `${this.url}/personas/${id}`;
    return this.http.put<Persona>(completeUrl, form); 
  }


}
