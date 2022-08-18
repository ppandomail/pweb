package ar.edu.ub.proyecto_web.controller;

import java.util.Date;
import java.util.LinkedList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

import ar.edu.ub.proyecto_web.model.Alumno;

@RestController
public class DemoController {

	@GetMapping()
	public String getAPIDate() {
		return new Date().toString();
	}
	
	@GetMapping(path="/getAlumnos")
	public String getAlumnosP3() {
		LinkedList<Alumno> alumnos =  new LinkedList<Alumno>();
		alumnos.add(new Alumno("Lautaro", 28));
		alumnos.add(new Alumno("Victoria", 25));
		alumnos.add(new Alumno("Cristian", 23));
		Gson gson = new Gson();
		return gson.toJson(alumnos);
	}
	
}