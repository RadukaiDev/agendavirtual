import { Component, OnInit} from '@angular/core';
import { RecordService } from '../services/record.service';
import { FormComponent } from './form.component';
import { Record } from '../models/record';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-record',
  imports: [CommonModule,FormComponent],
  templateUrl: './record.component.html',
  styleUrl: './record.component.css'
})


export class RecordComponent implements OnInit{

records: Record[] = [];
recordSelected: Record = new Record();
  constructor(private service: RecordService){}
  
 ngOnInit(): void {
     this.service.findAll().subscribe(records => this.records = records)
 }

 addRecord(record: Record): void {
  if(record.id_registro > 0){
    this.service.update(record).subscribe(recordUpdated =>{
      
      this.records = this.records.map(reco => {
        if(reco.id_registro == record.id_registro ){
          return {... recordUpdated};
        }
        return reco;
      });
    });

  }else{
    this.service.create(record).subscribe(recordNew =>{
      this.records.push( {...recordNew});
    })
  }
  this.recordSelected = new Record();
}

onUpdateRecord(recordRow: Record): void{
  this.recordSelected = {... recordRow};
}

onRemoveRecord(id_registro:number): void{
  this.service.remove(id_registro).subscribe(() => {
    this.records = this.records.filter(record => record.id_registro!=id_registro);
  }

)}

confirmAndRemoveRecord(id_registro: number): void {
  const userConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
  if (userConfirmed) {
    this.onRemoveRecord(id_registro);
  }
}


}
