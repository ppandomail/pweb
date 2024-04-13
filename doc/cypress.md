# 

## Flexibilidad en la estructura

* 



## Ejemplo

```js

```

## Orden de ejecución

* Mocha provee 4 hooks de ejecución.
  * Dos previos a la ejecución de los test, siendo el método **before()** para todo el test-suit y **beforeEach()** previo a cada test.
  * Dos posterior a la ejecución de los test, siendo **AfterEach()** ejecutado posterior a cada test y **After()** como último método a ser ejecutado previo al cierre del programa.

```js
before(() => {
  // runs once before all tests
})

beforeEach(() => {
  // runs before every test block
})

afterEach(() => {
  // runs after each test block
})

after(() => {
  // runs once all tests are done
})
```
