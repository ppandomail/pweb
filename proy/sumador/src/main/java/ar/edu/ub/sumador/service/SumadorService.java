package ar.edu.ub.sumador.service;

import org.springframework.stereotype.Service;

import ar.edu.ub.sumador.model.SumadorModel;

@Service
public class SumadorService {
	
	public double sumar(String n1, String n2) {
		double numero1 = Double.parseDouble(n1);
		double numero2 = Double.parseDouble(n2);
		SumadorModel sumadorModel = new SumadorModel(numero1, numero2);
		return sumadorModel.operar();
	}

}