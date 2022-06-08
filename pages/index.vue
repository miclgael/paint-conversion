<script setup>
const colors = await $fetch('/api/citadel')
</script>
<template>
  <div>
    <h1>Citadel</h1>
    <div class="grid">
      <div class="card" v-for="(color, index) in colors.table" :key="`${color}--index`">
        <div class="card-swatch" :style="{'background-color': color.hex }"></div>
        <div class="card-meta">
          <strong>Brand:</strong> {{ color.brand }}<br>
          <strong>Type:</strong> {{ color.type || 'N/A'}}<br>
          <strong>Name:</strong> {{ color.name }}<br>
          <strong>Hex:</strong> {{ color.hex }}<br>
          <strong>Delta:</strong> {{ color.delta || 'N/A'}}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
}
.card {
  border: 1px solid gray;
  border-radius: 5px;
  display: grid;
  grid-template-rows: 1fr 1fr;
}
.card-swatch {}
.card-meta {
  padding: 1rem;
  font-family: monospace;
}
</style>
