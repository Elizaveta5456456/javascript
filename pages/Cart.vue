<template>
  <div class="container">
    <h2>Корзина</h2>
    <div v-if="cart.length === 0">Корзина пуста</div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="card">
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }} ₽</p>
        <button class="button" @click="removeItem(index)">Удалить</button>
      </div>
      <h3>Итого: {{ total }} ₽</h3>
      <router-link to="/checkout" class="button">Оформить заказ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    }
  },
  computed: {
    total() {
      return this.cart.reduce((sum, item) => sum + item.price, 0)
    }
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || []
  },
  methods: {
    removeItem(index) {
      this.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.cart))
    }
  }
}
</script>
