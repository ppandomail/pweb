<script setup>
/* 

Ref:

. Es una forma de trabajar con la reactividad de Vue 3
. Es una referencia reactiva, se necesita un dato que sea "rastreable"
. Toma el argumento y lo devuelve envuelto dentro de un objeto con una value propiedad, 
que luego puede usarse para acceder o mutar el valor de la variable reactiva

. DOM: cuando muta el estado reactivo, el DOM se actualiza automáticamente

Computed:

. Sirven para generar cálculos en las componentes.
. No se recomienda colocar demasiada lógica en los templates, ya que lo hace ilegible
. La lógica compleja que incluye datos reactivos, se recomienda utilizar la propiedad calculada
. Una propiedad calculada solo se volverá a evaluar cuando algunas de sus dependencias reactivas hayan cambiado

*/

import { ref, computed } from 'vue'

// variable reactiva
let contador = ref(0)

const aumentar = () => contador.value++
const diminuir = () => contador.value--
const reiniciar = () => contador.value = 0

const classContador = computed(() => {
  if (contador.value == 0) return 'zero'
  if (contador.value > 0) return 'positivo'
  if (contador.value < 0) return 'negativo'
})
</script>

<template>

  <h1>Reatividade</h1>
  <!-- que pasaría si es cero se pinta de color peru -->
  <!-- <h2 :class="contador > 0 ? 'positivo' : 'negativo'">{{ contador }}</h2> -->
  <h2 :class="classContador">{{ contador }}</h2>
  <button @click="aumentar()">Aumentar</button>
  <button @click="diminuir()">Diminuir</button>
  <button @click="reiniciar()">Reiniciar</button>

</template>

<style>
h1 {
  color: yellow;
}

.positivo {
  color: green
}

.negativo {
  color: red
}

.zero {
  color: peru
}
</style>
