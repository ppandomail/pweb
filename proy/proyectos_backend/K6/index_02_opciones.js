import http from 'k6/http'
import { sleep } from 'k6'

export const options = {
  vus: 3,
  duration: '30s'
}

export default function() {
  http.get("https://test.k6.io")
  sleep(10)
}

// Se ejecuta:  k6 run index_02_opciones.js