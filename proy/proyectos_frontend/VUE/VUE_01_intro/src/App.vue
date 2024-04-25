<!-- renderiza todo el HTML que se necesita -->
<template>
  <!-- interpolación de texto (bigote o llaves dobles) es una forma de insertar valores en una plantilla -->
  <h1>Oi {{ nome }}</h1>

  <!-- interpolación no se puede usar dentro de atributos HTML. Se usa v-bind -->
  <h2 v-bind:style="cor">Sou azul</h2>

  <!-- v-bind se puede eliminar y dejar solo los : -->
  <h2 :style="cor">Sou azul</h2>

  <!-- expresión ternaria -->
  <h2>{{ ativo ? "Estou ativo" : "Nao estou ativo" }}</h2>
</template>

<style>
h1 {
  color: red;
}
</style>

<script setup>
const nome = "Vue";
const cor = "color: blue";
const ativo = false;
</script>
