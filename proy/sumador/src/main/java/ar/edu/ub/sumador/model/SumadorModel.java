package ar.edu.ub.sumador.model;

public class SumadorModel {
	
	private double numero1;
	private double numero2;
	
	public SumadorModel(double numero1, double numero2) {
		this.setNumero1(numero1);
		this.setNumero2(numero2);
	}
	
	public SumadorModel() {
		this(0, 0);
	}

	public double getNumero1() {
		return numero1;
	}

	public void setNumero1(double numero1) {
		this.numero1 = numero1;
	}

	public double getNumero2() {
		return numero2;
	}

	public void setNumero2(double numero2) {
		this.numero2 = numero2;
	}
	
	public double operar() {
		return this.getNumero1() + this.getNumero2();
	}
	
}