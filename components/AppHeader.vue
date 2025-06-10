<template>
  <header class="app-header">
    <router-link to="/" class="brand">Ресторан</router-link>
    <nav class="main-nav">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/menu" class="nav-link">Меню</router-link>
      <router-link to="/cart" class="nav-link">Корзина</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  width: 100%;
  padding: 20px 40px 16px 40px;
  align-items: center;
}

.main-nav {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
}

.nav-link {
  color: black;
  text-decoration: none;
  position: relative;
  padding-bottom: 5px;
  font-size: 16px;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: black;
  transition: width 0.3s ease-out;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link.router-link-active:hover::after {
  width: 100%;
  transition: none;
}

@keyframes highlight-active {
  0% { width: 100%; left: 0; }
  50% { width: 0; left: 0; }
  51% { width: 0; left: 100%; }
  100% { width: 100%; left: 0; }
}

.nav-link.router-link-active:hover::after {
  animation: highlight-active 0.6s ease-in-out forwards;
}

.brand {
  color: black;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: bold;
}

/* Адаптивные стили */
@media (max-width: 768px) {
  .app-header {
    padding: 15px 20px;
  }

  .brand {
    font-size: 1.2em;
  }

  .nav-link {
    font-size: 14px;
  }

  .main-nav {
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .app-header {
    padding: 10px 15px;
  }

  .brand {
    font-size: 1em;
  }

  .nav-link {
    font-size: 12px;
  }

  .main-nav {
    gap: 10px;
  }
}
</style> 