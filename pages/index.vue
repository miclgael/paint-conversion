<script setup>
const colors = await $fetch('/api/citadel')
</script>
<template>
  <div class="container">
    <h1>Citadel</h1>
    <div class="filter">
      <select name="" id="">
        <option value=""></option>
      </select>
    </div>
    <div class="grid">
      <div class="card" v-for="(color, index) in colors.table" :key="`color--${index}`">
        <div class="card-swatch" :style="{'background-color': color.hex }"></div>
        <div class="card-meta">
          <strong>Brand:</strong> {{ color.brand }}<br>
          <strong>Type:</strong> {{ color.type || 'N/A'}}<br>
          <strong>Name:</strong> {{ color.name }}<br>
          <strong>Hex:</strong> {{ color.hex }}<br>
          <strong>Delta:</strong> {{ color.delta || 'N/A'}}
        </div>
        <div class="divider" v-show="(index + 1) % 5 === 0"></div>
      </div>
    </div>
  </div>
</template>

<style>
.divider {
  position: absolute;
  bottom: -0.75rem;
  left: 0;
  background-color: red;
  width: 100%;
  height: 7px;
}
.container { 
  max-width: 1280px;
}
.grid {
  display: grid;
  grid-gap: 1rem;
}
.card {
  position: relative;
  border: 1px solid gray;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 3fr;
}
@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(5, 1fr);
  }
  .card {
    grid-template-columns: unset;
    grid-template-rows: repeat(2, 1fr);
  }
}

.card:nth-child(5n) {
  color: red;
}

.card-swatch {}
.card-meta {
  padding: 1rem;
  font-family: monospace;
}
</style>
