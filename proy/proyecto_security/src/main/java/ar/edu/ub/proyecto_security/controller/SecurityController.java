package ar.edu.ub.proyecto_security.controller;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SecurityController {

	@GetMapping
	public Date getSysdate() {
		return new Date();
	}
	
}
