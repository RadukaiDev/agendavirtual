package com.hector.backend.app.agenda.backend_app.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.hector.backend.app.agenda.backend_app.entities.Record;

@CrossOrigin(origins = "https://localhost:4200")
@RepositoryRestResource(path = "registros")
public interface RecordRepository extends CrudRepository<Record, Long>{

}
