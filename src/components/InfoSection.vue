<template>
  <section class="info-section">
    <header class="section-header">
      <h2 class="section-title">Информация</h2>
    </header>

    <div class="section-content">
      <div class="form-group">
        <label class="form-label">Город</label>
        <div class="input-wrapper">
          <input v-model="city" type="text" class="form-input" />
          <img
            src="/icons/arrow.svg"
            alt="" class="input-icon" />
        </div>
      </div>

      <div class="date-group">
        <div class="form-group">
          <label class="form-label">Дата начала*</label>
          <div class="input-wrapper">
            <input v-model="startDate" type="text" class="form-input" />
            <img
              src="/icons/calendar.svg"
              alt="" class="calendar-icon" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Дата окончания</label>
          <div class="input-wrapper">
            <input v-model="endDate" type="text" class="form-input" placeholder="дд.мм чч.мм" />
            <img
              src="/icons/calendar.svg"
              alt="" class="calendar-icon" />
          </div>
        </div>

        <button class="date-btn">+ День</button>
        <button class="date-btn">+ Неделя</button>
      </div>

      <div class="price-group">
        <label class="form-label">Цена</label>
        <div class="price-inputs">
          <div v-for="(price, index) in prices" :key="index" class="price-input-wrapper">
            <div class="price-input">
              <span class="currency">₽</span>
              <input v-model="price.value" type="text" class="form-input" :disabled="isFree" />
              <img v-if="!isFree"
                src="/icons/delete.svg"
                alt="" class="input-icon" />
            </div>
          </div>
        </div>

        <div class="free-toggle">
          <label class="toggle">
            <input type="checkbox" v-model="isFree" />
            <span class="toggle-slider"></span>
          </label>
          <span class="toggle-label">Бесплатно</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const city = ref("Сочи");
const startDate = ref("19.04 19:40");
const endDate = ref("");
const isFree = ref(false);
const prices = ref([{ value: "10000" }, { value: "10000" }, { value: "0" }]);
</script>

<style scoped lang="scss">
.info-section {
  border-radius: 20px;
  box-shadow: 0 5px 15px 0 rgba(39, 18, 47, 0.1);
  width: 100%;
  overflow: hidden;
  background-color: var(--color-white);
}

.section-header {
  background-color: var(--color-gray-200);
  padding: 10px 20px;
}

.section-title {
  font-size: 18px;
  color: var(--color-gray-900);
  font-weight: 600;
}

.section-content {
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  color: var(--color-gray-900);
  font-size: 16px;
  font-weight: 500;
  display: block;
  margin-bottom: 5px;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input {
  border-radius: 10px;
  border: 1px solid var(--color-gray-200);
  padding: 10px;
  width: 100%;
  font-size: 18px;
}

.input-icon {
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
}

.date-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: flex-end;
}

.date-btn {
  border-radius: 10px;
  background-color: var(--color-primary-700);
  color: var(--color-white);
  padding: 10px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
}

.price-group {
  margin-top: 20px;
}

.price-inputs {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.price-input-wrapper {
  width: 200px;
}

.price-input {
  border-radius: 15px;
  border: 1px solid var(--color-gray-200);
  padding: 15px;
  display: flex;
  align-items: center;
  min-height: 60px;
}

.currency {
  color: var(--color-gray-900);
  width: 20px;
  text-align: center;
}

.free-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 30px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-gray-100);
  transition: 0.4s;
  border-radius: 18px;
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: 24px;
  width: 24px;
  left: 3px;
  bottom: 3px;
  background-color: var(--color-white);
  transition: 0.4s;
  border-radius: 50%;
  box-shadow:
    0 1.5px 3px rgba(16, 24, 40, 0.06),
    0 1.5px 4.5px rgba(16, 24, 40, 0.1);
}

.toggle input:checked + .toggle-slider {
  background-color: var(--color-primary-700);
}

.toggle input:checked + .toggle-slider:before {
  transform: translateX(24px);
}

.toggle-label {
  color: var(--color-gray-900);
  font-size: 18px;
  font-weight: 400;
}

@media (max-width: 991px) {
  .info-section {
    max-width: 100%;
  }
}
</style>

