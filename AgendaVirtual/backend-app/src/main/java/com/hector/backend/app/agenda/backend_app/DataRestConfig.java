package com.hector.backend.app.agenda.backend_app;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.hector.backend.app.agenda.backend_app.entities.Record;

@Configuration
public class DataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors){

config.exposeIdsFor(Record.class);

cors.addMapping("/registros/**") // O la ruta base de tu API REST (puede ser "/" si usas la raíz)
.allowedOrigins("http://localhost:4200") // Origen de tu app Angular
.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos permitidos
.allowedHeaders("*"); // Cabeceras permitidas (puedes ser más específico si quieres)

    }
}
