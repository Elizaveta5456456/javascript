<template>
  <div class="container">
    <h2>Меню</h2>
    <div class="segmented-control">
      <button :class="{ segment: true, active: category === '' }" @click="filterCategory('')">Все</button>
      <button :class="{ segment: true, active: category === 'Пицца' }" @click="filterCategory('Пицца')">Пицца</button>
      <button :class="{ segment: true, active: category === 'Напитки' }" @click="filterCategory('Напитки')">Напитки</button>
      <button :class="{ segment: true, active: category === 'Десерты' }" @click="filterCategory('Десерты')">Десерты</button>
    </div>
    <div v-for="dish in filteredDishes" :key="dish.id" class="card">
      <h3>{{ dish.name }}</h3>
      <p>{{ dish.description }}</p>
      <p><strong>{{ dish.price }} ₽</strong></p>
      <button class="button" @click="addToCart(dish)">Добавить в заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: '',
      dishes: [
        { id: 1, name: 'Маргарита', description: 'Томат, сыр', price: 500, category: 'Пицца' },
        { id: 2, name: 'Пепперони', description: 'Острые колбаски', price: 600, category: 'Пицца' },
        { id: 3, name: 'Кола', description: 'Газированный напиток', price: 150, category: 'Напитки' },
        { id: 4, name: 'Тирамису', description: 'Итальянский десерт', price: 300, category: 'Десерты' }
      ]
    }
  },
  computed: {
    filteredDishes() {
      if (!this.category) return this.dishes
      return this.dishes.filter(d => d.category === this.category)
    }
  },
  methods: {
    addToCart(dish) {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      cart.push(dish)
      localStorage.setItem('cart', JSON.stringify(cart))
      alert(`${dish.name} добавлен в заказ`)
    },
    filterCategory(cat) {
      this.category = cat
    }
  }
}
</script>

<style scoped>
.segmented-control {
  display: inline-flex; /* Используем inline-flex */
  padding: 2px; /* Отступ из Figma */
  align-items: center; /* Выравнивание из Figma */
  gap: 6px; /* Расстояние между чипами из Figma */
  margin-bottom: 20px;
  max-width: fit-content; /* Ширина по содержимому */
  /* Убираем центрирование, если нужно выравнивание по левому краю */
  /* margin-left: auto; */
  /* margin-right: auto; */
  border-radius: 96px; /* Скругление из Figma */
  background: rgba(31, 31, 31, 0.03); /* Фон из Figma */
}

.segment {
  display: inline-block;
  padding: 8px 16px; /* Отступы внутри чипа */
  border-radius: 20px; /* Скругленные углы чипа */
  background-color: transparent; /* Фон неактивного чипа прозрачный */
  color: #333; /* Цвет текста неактивного чипа */
  text-align: center;
  border: none; /* Убираем границы кнопок */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  /* Убираем box-shadow для неактивных */
}

.segment:not(:last-child) {
  border-right: none; /* Убираем разделитель между сегментами */
}

.segment.active {
  background-color: #1e1e1e; /* Темный фон активного чипа */
  color: white; /* Белый цвет текста активного чипа */
  border-radius: 20px; /* Скругленные углы активного чипа */
  box-shadow: 0 1px 3px rgba(0,0,0,0.2); /* Тень для активного чипа */
}

.segment:hover:not(.active) {
  background-color: rgba(31, 31, 31, 0.08); /* Фон при наведении на неактивный чип, немного темнее фона контейнера */
}

.card {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px 0;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.02);
}

.button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
