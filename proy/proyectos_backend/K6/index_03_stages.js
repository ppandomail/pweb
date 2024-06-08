import http from 'k6/http'
import { sleep, check } from 'k6'

/* 
¿Cómo aumentar y disminuir el número de VU durante la prueba?
Cada solicitud se realizará cada 10 segundos.
. En la primera etapa, durante los 40s la cantidad de VUs va a aumentar (max usuarios 4)
. En la segunda etapa, durante 1m20s, la cantidad de VUs también aumentará (usuarios máximo 10)
. En los últimos 20 segundos, durante 20s, la cantidad de VUs va a disminuir (Usuarios mínimos 0)
*/

export const options = {
  stages: [
    { duration: '40s', target: 4 },
    { duration: '1m20s', target: 10 },
    { duration: '20s', target: 0 }
  ]
}

export default function() {
  const res = http.get("https://httpbin.test.k6.io/")
  // Verifica que la respuesta sea 200
  check(res, { 'status was 200' : (r) => r.status == 200 })
  sleep(10)
}

// Se ejecuta:  k6 run index_03_stages.js