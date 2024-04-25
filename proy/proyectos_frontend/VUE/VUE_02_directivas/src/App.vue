<template>

  <h1> Directivas </h1>

  <!-- directiva v-if : muestra u oculta un elemento, destruyendolo -->
  <p v-if="ativo"> Apresento com v-if </p>

  <!-- directiva v-show : muestra u oculta un elemento, cambiando la propiedad display CSS del elemento -->
  <p v-show="ativo"> Apresento com v-show </p>

  <!-- directiva v-for : itera sobre una lista -->
  <h2>Países:</h2>
  <ul>
    <li v-for="pais in paises"> {{ pais }} </li>
  </ul>

  <!-- directiva v-for : itera sobre un objeto -->
  <h2>Pessoa:</h2>
  <ul>
    <li v-for="(value, prop, index) in pessoa" :key="index"> {{ prop }} : {{ value }} </li>
  </ul>

  <!-- directiva v-for con v-if -->
  <h2>Produtos:</h2>
  <ul>
    <template v-for="prod in produtos">
      <li v-if="prod.preço != 0"> {{ prod.nome }} - {{ prod.preço }}</li>
    </template>
  </ul>

  <!-- directiva v-on : para escuchar eventos del DOM y ejecutar JS -->
  <!-- v-on:click o @click -->
  <button v-on:click="apresentar('pepe')">Pressionar v-on:click</button>
  <button @click="apresentar('pepa')">Pressionar @click</button>

</template>

<style>
h1 {
  color: red;
}
</style>

<script setup>
const ativo = true
const paises = ["br", "ar", "ch", "py"]
const pessoa = { nome: "Pablo", idade: 35, esporte: 'nataçao' }
const produtos = [{ nome: "fruta", preço: 150 }, { nome: "verdura", preço: 0 }, { nome: "carne", preço: 300 }]

const apresentar = (nome) => console.log(`Bemvindo ${nome}`)
</script>
