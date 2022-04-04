import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from '../interfaces/persona.interface';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Persona,
            private personaService:PersonasService,
  ) {}

  ngOnInit(): void {
  }

  deleteUser(id: number){
    this.personaService.deleteById(id)
      .subscribe( personalData => {
        this.data = personalData;
        this.ngOnInit()
      })
  }

}
