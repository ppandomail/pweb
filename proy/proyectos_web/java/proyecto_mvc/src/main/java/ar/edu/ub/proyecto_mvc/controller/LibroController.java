package ar.edu.ub.proyecto_mvc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import ar.edu.ub.proyecto_mvc.service.LibroService;

@Controller
public class LibroController {
	
	@Autowired
	private LibroService libroService;
	
	@GetMapping
	public String getLibros(Model model) {
		model.addAttribute("libros", libroService.getLibros());
		model.addAttribute("contador", libroService.getCantidadPaginas());
		return "index";
	}

}
