package ar.edu.ub.proyecto_jpa_mysql.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import ar.edu.ub.proyecto_jpa_mysql.model.PersonaModel;
import ar.edu.ub.proyecto_jpa_mysql.repository.PersonaRepository;

@Controller
public class PersonaController {

	@Autowired
	private PersonaRepository repo;

	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("list", repo.findAll());
		return "index";
	}

	@GetMapping("/save/{id}")
	public String showSave(@PathVariable("id") Long id, Model model) {
		if (id != null && id != 0) 
			model.addAttribute("persona", repo.findById(id));
		else 
			model.addAttribute("persona", new PersonaModel());
		return "save";
	}

	@PostMapping("/save")
	public String save(PersonaModel persona, Model model) {
		repo.save(persona);
		return "redirect:/";
	}

	@GetMapping("/delete/{id}")
	public String delete(@PathVariable Long id, Model model) {
		repo.delete(repo.findById(id).get());
		return "redirect:/";
	}
	
}