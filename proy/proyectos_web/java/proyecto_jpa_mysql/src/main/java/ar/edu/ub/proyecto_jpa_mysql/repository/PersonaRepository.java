package ar.edu.ub.proyecto_jpa_mysql.repository;

import org.springframework.data.repository.CrudRepository;

import ar.edu.ub.proyecto_jpa_mysql.model.PersonaModel;

public interface PersonaRepository extends CrudRepository<PersonaModel, Long> {

}
