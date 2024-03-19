package ar.edu.ub.sumador.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import ar.edu.ub.sumador.service.SumadorService;

@Controller
public class SumadorController {
	
	@Autowired
	private SumadorService sumadorService;
	
	@GetMapping(path="/sumar")
	public String getSuma(
			@RequestParam(name="n1", required=false, defaultValue="0")
			String n1,
			@RequestParam(name="n2", required=false, defaultValue="0")
			String n2,
			Model model) {
		model.addAttribute("resultado", sumadorService.sumar(n1, n2));
		return "index";
	}

}