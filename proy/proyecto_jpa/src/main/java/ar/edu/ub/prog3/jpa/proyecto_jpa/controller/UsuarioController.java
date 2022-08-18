package ar.edu.ub.prog3.jpa.proyecto_jpa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Usuario;
import ar.edu.ub.prog3.jpa.proyecto_jpa.repository.RolRepositorio;
import ar.edu.ub.prog3.jpa.proyecto_jpa.repository.UsuarioRepositorio;

@Controller
public class UsuarioController {

	@Autowired
	UsuarioRepositorio usuarioRepositorio;
	
	@Autowired
	RolRepositorio rolRepositorio;
	
	@GetMapping
	public String index(Model modelo) {
		return this.actualizarModelo(modelo, new Usuario());
	}

	@PostMapping("/crearUsuario")
	public String crearUsuario(Model modelo, Usuario usuario) {
		usuarioRepositorio.save(usuario);
		return this.actualizarModelo(modelo, new Usuario());
	}

	@GetMapping("/editarUsuario/{id}")
	public String editarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		return this.actualizarModelo(modelo, usuarioRepositorio.findById(id).get());
	}

	@GetMapping("/eliminarUsuario/{id}")
	public String eliminarUsuario(Model modelo, @PathVariable(name="id") Long id) {
		usuarioRepositorio.delete(usuarioRepositorio.findById(id).get());
		return this.actualizarModelo(modelo, new Usuario());
	}

	private String actualizarModelo(Model modelo, Usuario usuario) {
		modelo.addAttribute("usuario", usuario);
		modelo.addAttribute("usuarios", usuarioRepositorio.findAll());
		modelo.addAttribute("roles", rolRepositorio.findAll());
		return "index";
	}
	
}
