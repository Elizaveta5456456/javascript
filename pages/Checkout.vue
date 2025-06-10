<template>
  <div class="container">
    <h2>Оформление заказа</h2>
    <form @submit.prevent="submitOrder" novalidate>
      <div class="form-group">
        <input
          v-model="name"
          placeholder="Имя"
          required
          :class="{ 'input-field': true, 'error': formSubmitted && !name }"
        />
      </div>
      <div class="form-group">
        <input
          :value="phoneInputDisplay"
          @input="handlePhoneInput"
          @focus="handlePhoneFocus"
          @blur="handlePhoneBlur"
          placeholder="Номер телефона"
          required
          :class="{ 'input-field': true, 'error': formSubmitted && phone.length < 10 }"
          type="tel"
        />
      </div>
      <div class="form-group">
        <input
          v-model="address"
          placeholder="Адрес доставки"
          required
          :class="{ 'input-field': true, 'error': formSubmitted && !address }"
        />
      </div>
      <button class="button" type="submit">Подтвердить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      phone: '', // Храним только цифры
      address: '',
      phoneInputDisplay: '', // Отображаемое значение с маской
      formSubmitted: false // Флаг попытки отправки формы
    }
  },
  methods: {
    submitOrder() {
      this.formSubmitted = true; // Устанавливаем флаг при попытке отправки

      // Проверяем this.phone, который содержит только цифры
      if (this.name && this.phone.length === 10 && this.address) {
        localStorage.removeItem('cart');
        this.$router.push('/order-success');
      } else {
        alert('Пожалуйста, заполните все поля');
      }
    },
    handlePhoneInput(event) {
      let value = event.target.value;
      let rawDigits = value.replace(/\D/g, ''); // Оставляем только цифры

      // Удаляем префикс 7 или 8, если введены
      if (rawDigits.startsWith('7')) {
          rawDigits = rawDigits.substring(1);
      }
      if (rawDigits.startsWith('8')) {
          rawDigits = rawDigits.substring(1);
      }

      // Ограничиваем количество цифр до 10
      if (rawDigits.length > 10) {
        rawDigits = rawDigits.substring(0, 10);
      }

      // Обновляем внутреннее состояние с цифрами
      this.phone = rawDigits;

      // Форматируем отображаемое значение
      let formatted = '+7';
      if (this.phone.length > 0) formatted += ' (';
      if (this.phone.length > 0) formatted += this.phone.substring(0, 3);
      if (this.phone.length >= 4) formatted += ') ';
      if (this.phone.length >= 4) formatted += this.phone.substring(3, 6);
      if (this.phone.length >= 7) formatted += '-';
      if (this.phone.length >= 7) formatted += this.phone.substring(6, 8);
      if (this.phone.length >= 9) formatted += '-';
      if (this.phone.length >= 9) formatted += this.phone.substring(8, 10);

      this.phoneInputDisplay = formatted;

      // Для корректного позиционирования курсора
       this.$nextTick(() => {
           const input = event.target;
           const cursorPosition = this.phoneInputDisplay.length;
            // Не ставим курсор внутри маски, только после введенных цифр или в конце
            let currentFormatted = '+7';
            if (this.phone.length > 0) currentFormatted += ' (' + this.phone.substring(0, 3);
            if (this.phone.length >= 4) currentFormatted += ') ' + this.phone.substring(3, 6);
            if (this.phone.length >= 7) currentFormatted += '-' + this.phone.substring(6, 8);
            if (this.phone.length >= 9) currentFormatted += '-' + this.phone.substring(8, 10);

           let newCursorPosition = currentFormatted.length;

           input.setSelectionRange(newCursorPosition, newCursorPosition);
       });
    },
    handlePhoneFocus(event) {
      if (!this.phoneInputDisplay || this.phoneInputDisplay === '+7') {
         this.phoneInputDisplay = '+7 (';
      }
       // Перемещаем курсор после '+7 ('
       this.$nextTick(() => {
           const input = event.target;
           const prefixLength = '+7 ('.length;
            if (input.value.startsWith('+7 (')) {
                input.setSelectionRange(prefixLength, prefixLength);
            } else if (input.value.startsWith('+7')) {
                 input.setSelectionRange('+7'.length, '+7'.length);
            }
       });
    },
     handlePhoneBlur() {
        // Если после ухода из поля количество цифр меньше 10, очищаем поле
        if (this.phone.length < 10) {
            this.phoneInputDisplay = '';
            this.phone = '';
        } else {
             // Убедимся, что отображаемое значение корректно при полном номере
             this.handlePhoneInput({ target: { value: this.phone } }); // Переформатируем полный номер
        }
     }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column; /* Располагаем элементы в колонку */
  gap: 15px; /* Расстояние между элементами формы */
}

.form-group {
  width: 100%; /* Каждый элемент занимает всю ширину */
}

.input-field {
  width: 100%; /* Поле ввода занимает всю доступную ширину */
  padding: 12px 15px; /* Внутренние отступы */
  border: 1px solid #ccc; /* Граница */
  border-radius: 8px; /* Скругленные углы */
  font-size: 1em;
  box-sizing: border-box; /* Учитываем padding и border в общей ширине */
  background-color: #f0f0f0; /* Светлый фон, как на втором изображении */
  color: #333; /* Цвет текста */
  transition: border-color 0.3s ease; /* Добавляем анимацию для границы */
}

.input-field::placeholder {
  color: #888; /* Цвет плейсхолдера */
}

/* Стиль для поля с ошибкой */
.input-field.error {
  border-color: red; /* Красная обводка */
}

.button {
  background-color: #42b983;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 8px; /* Скругленные углы кнопки */
  cursor: pointer;
  font-size: 1.1em;
  margin-top: 10px; /* Отступ сверху от кнопки */
  align-self: flex-start; /* Выравниваем кнопку по левому краю */
}

.button:hover {
  background-color: #36a476;
}

</style>
