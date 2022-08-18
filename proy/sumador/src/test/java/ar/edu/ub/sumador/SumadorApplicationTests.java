package ar.edu.ub.sumador;

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
class SumadorApplicationTests {
	
	private static WebDriver driver;
	
	@BeforeAll
	public static void setup() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get("http://localhost:8443");
	}
	
	@Test
	public void testSumaConNumero() {		
		WebElement n1 = driver.findElement(By.id("n1"));
		n1.sendKeys("2");
		WebElement n2 = driver.findElement(By.id("n2"));
		n2.sendKeys("3");
		WebElement boton = driver.findElement(By.xpath("//input[@type='submit']"));
		boton.click();
		WebElement rtado= driver.findElement(By.id("rtado"));
		assertEquals("5.0", rtado.getText());	
	}
	
	@Test
	public void testSumaSinnNumero() {		
		WebElement boton = driver.findElement(By.xpath("//input[@type='submit']"));
		boton.click();
		WebElement rtado= driver.findElement(By.id("rtado"));
		assertEquals("0.0", rtado.getText());	
	}
	
	@AfterAll
	public static void tearDown() {
		driver.quit();
	}
	
}