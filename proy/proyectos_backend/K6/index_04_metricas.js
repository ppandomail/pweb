/*

Métricas que miden el rendimiento del sistema
(https://k6.io/docs/get-started/results-output/)

. http_req_duration: el tiempo de un extremo a otro de todas las solicitudes (es decir, la latencia total)
. http_req_failed: el número total de solicitudes fallidas
. iteraciones, el número total de iteraciones
. ...
. https://k6.io/docs/using-k6/metrics/

. https://grafana.com/blog/2018/02/06/how-to-read-your-load-testing-reports/

*/

import http from 'k6/http';

export default function () {
  http.get('https://test.k6.io');
}

export function handleSummary(data) {
  return {
    'summary.json': JSON.stringify(data), //the default data object
  };
}

// Se ejecuta:  k6 run index_04_metricas.js
// Devuelve archivo: summary.json con las metricas
