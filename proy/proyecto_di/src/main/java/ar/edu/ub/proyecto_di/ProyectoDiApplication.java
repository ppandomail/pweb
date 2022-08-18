package ar.edu.ub.proyecto_di;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ar.edu.ub.proyecto_di.service.IPersonaService;

@SpringBootApplication
public class ProyectoDiApplication implements CommandLineRunner {

	@Autowired
	private IPersonaService servicio;
	
	public static void main(String[] args) {
		SpringApplication.run(ProyectoDiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		servicio.registrar("Pablo");	
	}
	
	

}
