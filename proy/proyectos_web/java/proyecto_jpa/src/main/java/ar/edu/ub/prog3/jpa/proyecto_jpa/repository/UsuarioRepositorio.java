package ar.edu.ub.prog3.jpa.proyecto_jpa.repository;

import org.springframework.data.repository.CrudRepository;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Usuario;

public interface UsuarioRepositorio extends CrudRepository<Usuario, Long> {

}
