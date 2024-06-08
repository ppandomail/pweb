/*

K6

. Es una herramienta de prueba de carga/rendimiento
. De código abierto
. Desarrollado por Grafana Labs y su comunidad

* Instalación (https://k6.io/docs/get-started/installation/)
. MacOS  
brew install k6
k6 -v

* VU (Virtual User): Son loops while(true) paralelos

https://github.com/JoanEsquivel/k6-demo/tree/main

*/

import http from 'k6/http'
import { sleep } from 'k6'

export default function() {
  // Enviando una solicitud GET a este endpoint
  http.get("https://test.k6.io")
  // Suspende la ejecución de un VU (Virtual User) por una duración especifica
  // Cada 10s se envia un request
  sleep(10)
}

// Se ejecuta con 1 VU:  k6 run index_01_basico.js
// Se ejecuta con 1 VU:  k6 run --duration 30s index_01_basico.js 
// Se ejecuta con 2 VUs: k6 run --vus 2 --duration 30s index_01_basico.js