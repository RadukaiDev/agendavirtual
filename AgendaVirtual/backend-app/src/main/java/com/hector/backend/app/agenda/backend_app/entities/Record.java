package com.hector.backend.app.agenda.backend_app.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "registros")
public class Record {

    Long id_registro;
    String nombre;
    String telefono;
    String descripcion;
    String fecha_cita;

    @Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId_registro() {
        return id_registro;
    }
    public void setId_registro(Long id_registro) {
        this.id_registro = id_registro;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getTelefono() {
        return telefono;
    }
    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }
    public String getDescripcion() {
        return descripcion;
    }
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    public String getFecha_cita() {
        return fecha_cita;
    }
    public void setFecha_cita(String fecha_cita) {
        this.fecha_cita = fecha_cita;
    }

}
