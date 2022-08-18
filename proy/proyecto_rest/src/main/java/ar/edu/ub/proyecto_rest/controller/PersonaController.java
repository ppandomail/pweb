package ar.edu.ub.proyecto_rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import ar.edu.ub.proyecto_rest.model.Persona;
import ar.edu.ub.proyecto_rest.service.PersonaService;

@RestController
public class PersonaController {

	@Autowired
	private PersonaService personaService;
	
	@GetMapping(path="/getPersonas")
	public List<Persona> getPersonas() {
		return personaService.getPersonas();
	}
	
}