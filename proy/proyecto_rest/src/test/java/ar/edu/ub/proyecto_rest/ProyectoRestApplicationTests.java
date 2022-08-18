package ar.edu.ub.proyecto_rest;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;

@ExtendWith(SpringExtension.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@SpringBootTest(classes=ProyectoRestApplicationTests.class)
class ProyectoRestApplicationTests {

	@BeforeAll
	public void initTest() {
		RestAssured.port = 8443;
	}

	@Test
	public void statusCodeTest() { 
		given()
		.contentType(ContentType.JSON)
		.log().all()
		.get("getPersonas")
		.then().assertThat()
		.statusCode(200);
	}

	@Test
	public void sizeBodyTest() {
		given()
		.contentType(ContentType.JSON)
		.log().all()
		.get("getPersonas")
		.then().assertThat()
		.statusCode(200)
		.body("size()", is(5));
	}

	@Test
	public void containsTestTest() {
		given()
		.contentType(ContentType.JSON)
		.log().all()
		.get("getPersonas")
		.then().assertThat()
		.statusCode(200)
		.body("nombre", hasItem("Alan Turing"));
	}

}