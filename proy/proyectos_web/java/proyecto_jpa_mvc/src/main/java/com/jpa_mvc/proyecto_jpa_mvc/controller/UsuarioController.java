package com.jpa_mvc.proyecto_jpa_mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.jpa_mvc.proyecto_jpa_mvc.model.Usuario;
import com.jpa_mvc.proyecto_jpa_mvc.repository.UsuarioRepositorio;

@Controller
public class UsuarioController {

	@Autowired
	private UsuarioRepositorio repo;

	@GetMapping
	public String index(Model modelo) {
		return this.actualizarModelo(modelo, new Usuario());
	}

	@PostMapping("/crearUsuario")
	public String crearUsuario(Model modelo, Usuario usuario) {
		repo.save(usuario);
		return this.actualizarModelo(modelo, new Usuario());
	}

	@GetMapping("/editarUsuario/{id}")
	public String editarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		return this.actualizarModelo(modelo, repo.findById(id).get());
	}

	@GetMapping("/eliminarUsuario/{id}")
	public String eliminarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		repo.delete(repo.findById(id).get());
		return this.actualizarModelo(modelo, new Usuario());
	}

	private String actualizarModelo(Model modelo, Usuario usuario) {
		modelo.addAttribute("usuario", usuario);
		modelo.addAttribute("usuarios", repo.findAll());
		return "index";
	}


}
