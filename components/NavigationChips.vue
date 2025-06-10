<template>
  <nav class="chips-nav">
    <router-link to="/" class="chip">Главная</router-link>
    <router-link to="/menu" class="chip">Меню</router-link>
    <router-link to="/cart" class="chip">Корзина</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavigationChips'
}
</script>

<style scoped>
.chips-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.chip {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #e0e0e0; 
  color: #333;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); 
}

.chip:hover {
  background-color: #d5d5d5;
}

.chip.router-link-active {
  background-color: #42b983;
  color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
</style> 