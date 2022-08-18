package ar.edu.ub.proyecto_consola;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProyectoConsolaApplication implements CommandLineRunner {

	private static Logger LOG = LoggerFactory.getLogger(ProyectoConsolaApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(ProyectoConsolaApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Oi, estamos na aula de Prog3!!!");
		LOG.info("Esto es un mensaje de INFO");
		LOG.warn("Esto es un mensaje de WARNING");
		LOG.error("Esto es un mensaje de ERROR");
	}

}