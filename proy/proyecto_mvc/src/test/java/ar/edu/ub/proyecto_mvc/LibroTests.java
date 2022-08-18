package ar.edu.ub.proyecto_mvc;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.springframework.boot.test.context.SpringBootTest;

import io.github.bonigarcia.wdm.WebDriverManager;

@SpringBootTest
class LibroTests {

	private static WebDriver driver;
	
	@BeforeAll
	public static void setUp() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://localhost:8443");
	}
	
	@Test
	public void verificarTitulo() {
		assertEquals("Biblioteca", driver.getTitle());	
	}
	
	@Test
	public void verificarPaginas() {
		WebElement h3CantPag = driver.findElement(By.id("idCant"));
		assertEquals("Cantidad de Paginas 3455", h3CantPag.getText());
	}
	
	@AfterAll
	public static void cerrarNavegador() {
		driver.close();
	}	

}