<template>
  <div class="app">
    <AppHeader />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<style>
body {
  margin: 0;
}

.app-header-wrapper {
  background-color: #1e1e1e;
  width: 100%;
}

.app {
  min-height: 100vh;
  padding: 0;
}

.main-content {
  padding-top: 100px;
}
</style>
