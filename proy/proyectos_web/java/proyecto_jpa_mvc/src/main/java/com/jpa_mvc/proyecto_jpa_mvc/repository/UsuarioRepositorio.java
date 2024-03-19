package com.jpa_mvc.proyecto_jpa_mvc.repository;

import org.springframework.data.repository.CrudRepository;

import com.jpa_mvc.proyecto_jpa_mvc.model.Usuario;

public interface UsuarioRepositorio extends CrudRepository<Usuario, Long> {

}
