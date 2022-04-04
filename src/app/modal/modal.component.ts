import { Component, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() personaDetalle: any;

  constructor(public dialog: MatDialog) {
  }

  openDialog() {
    this.dialog.open(ModalDialogComponent, {data: this.personaDetalle});
  }

}
