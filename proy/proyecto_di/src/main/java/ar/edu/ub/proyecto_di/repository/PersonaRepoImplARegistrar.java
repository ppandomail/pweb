package ar.edu.ub.proyecto_di.repository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

@Repository
@Qualifier("SI")
public class PersonaRepoImplARegistrar implements IPersonaRepo {

	private static Logger LOG = LoggerFactory.getLogger(PersonaRepoImplARegistrar.class);
	
	@Override
	public void registrar(String nombre) {
		LOG.info("Se registró a " + nombre);
	}
	
}