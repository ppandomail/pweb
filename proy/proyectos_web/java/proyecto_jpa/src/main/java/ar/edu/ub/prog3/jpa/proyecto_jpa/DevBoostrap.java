package ar.edu.ub.prog3.jpa.proyecto_jpa;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

import ar.edu.ub.prog3.jpa.proyecto_jpa.entity.Rol;
import ar.edu.ub.prog3.jpa.proyecto_jpa.repository.RolRepositorio;

@Component
public class DevBoostrap implements ApplicationListener<ContextRefreshedEvent> {

	@Autowired
	RolRepositorio rolRepositorio;
	
	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		rolRepositorio.save(new Rol("Administrador"));
		rolRepositorio.save(new Rol("Contable"));
		rolRepositorio.save(new Rol("Regular"));	
	}

}