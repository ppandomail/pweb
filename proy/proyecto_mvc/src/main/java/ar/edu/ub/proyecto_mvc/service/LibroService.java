package ar.edu.ub.proyecto_mvc.service;

import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Service;

import ar.edu.ub.proyecto_mvc.model.Libro;

@Service
public class LibroService {
	
	private List<Libro> libros;
	
	public LibroService() {
		libros = new LinkedList<Libro>();
		this.agregarLibros();
	}
	
	public void agregarLibros() {
		libros.add(new Libro("El Señor de los Anillos", 560));
		libros.add(new Libro("El hombre bicentenario", 476));
		libros.add(new Libro("El resplandor", 999));
		libros.add(new Libro("Fahrenheit 451", 250));
		libros.add(new Libro("El nombre del viento", 970));
		libros.add(new Libro("El corazon delator", 200));
	}
	
	public List<Libro> getLibros() {
		return this.libros;
	}
	
	public int getCantidadPaginas() {
		int cont = 0;
		for(Libro libro : libros) 
			cont += libro.getPaginas();
		return cont;
	}

}