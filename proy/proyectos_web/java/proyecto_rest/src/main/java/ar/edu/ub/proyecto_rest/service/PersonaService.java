package ar.edu.ub.proyecto_rest.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Service;

import ar.edu.ub.proyecto_rest.model.Persona;

@Service
public class PersonaService {
	
	public List<Persona> getPersonas() {
		List<Persona> lista = new LinkedList<Persona>();
		lista.add(new Persona("Alan Turing", 42));
		lista.add(new Persona("Ada Lovelace", 37));
		lista.add(new Persona("Naom Chomsky", 92));
		lista.add(new Persona("John von Neumann", 54));
		lista.add(new Persona("Edsger Dijkstra", 72));
		return lista;
	}

}