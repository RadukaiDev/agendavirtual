import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Record } from '../models/record';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

private records: Record[] = [
  {
    id_registro:1,
    nombre: "Hector Galvez",
    telefono: "1234567890",
    descripcion: "Cita Médica",
    fecha_cita: "2025-04-14 18:30:00"
  }
];



  constructor(private http:HttpClient) { 
  }

  private url: string = 'http://localhost:8080/registros';

  findAll(): Observable<Record[]> {
 return this.http.get(this.url).pipe(
    map((response:any)=> response._embedded.records as Record[]),
  );
  }

  create(record: Record): Observable<Record>{
    return this.http.post<Record>(this.url, record);
  }

  update(record: Record): Observable<Record> {
    return this.http.put<Record>(`${this.url}/${record.id_registro}`, record);
  }

  
  remove(id_registro: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id_registro}`);
  }
}
