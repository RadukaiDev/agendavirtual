import { CommonModule } from '@angular/common';
import { Component,EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Record } from '../models/record';

@Component({
  selector: 'app-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() record: Record = {
    id_registro: 0,
    telefono: '',
    nombre:'',
    descripcion: '',
    fecha_cita:''
  };
  
  @Output() newRecordEvent = new EventEmitter();
  
  onSubmit(recordForm:NgForm): void{
    if(recordForm.valid){
      this.newRecordEvent.emit(this.record);
      console.log(this.record);
    }
    recordForm.reset();
    recordForm.resetForm();
  }
  
  clean(): void{
    this.record = new Record();
  }


}
