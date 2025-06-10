<template>
  <div class="home-page">
    <h1>Добро пожаловать в наш ресторан!</h1>
    <p>Лучшие пиццы, десерты и напитки в городе.</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

p {
  color: #666;
  margin-bottom: 2rem;
  font-size: 1.2rem;
}
</style>
