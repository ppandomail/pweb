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

const lista = ref([])

const aumentar = () => contador.value++
const diminuir = () => contador.value--
const reiniciar = () => contador.value = 0

const classContador = computed(() => {
  if (contador.value == 0) return 'zero'
  if (contador.value > 0) return 'positivo'
  if (contador.value < 0) return 'negativo'
})

const adicionar = () => lista.value.push(contador.value)
const desabilitar = computed(() => lista.value.includes(contador.value))

</script>

<template>
  <div class="container text-center mt-3">
    <h1>Reatividade</h1>
    <!-- que pasaría si es cero se pinta de color peru -->
    <!-- <h2 :class="contador > 0 ? 'positivo' : 'negativo'">{{ contador }}</h2> -->
    <h2 :class="classContador">{{ contador }}</h2>
    <div class="btn-group">
      <button @click="aumentar()" class="btn btn-success">Aumentar</button>
      <button @click="diminuir()" class="btn btn-danger">Diminuir</button>
      <button @click="reiniciar()" class="btn btn-secondary">Reiniciar</button>
      <button :disabled="desabilitar" @click="adicionar()" class="btn btn-primary">Adicionar</button>
    </div>
    <h2 class="mt-3">Meus favoritos</h2>
    <ul class="list-group mt-2">
      <li class="list-group-item" v-for="(num, index) in lista" :key="index">
        {{ num }}
      </li>
    </ul>
  </div>

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
