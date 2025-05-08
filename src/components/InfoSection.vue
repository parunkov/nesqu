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
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/cab5b4227ad7fa14d18cf9f833b27483c9ba4d37?placeholderIfAbsent=true"
            alt="" class="input-icon" />
        </div>
      </div>

      <div class="date-group">
        <div class="form-group">
          <label class="form-label">Дата начала*</label>
          <div class="input-wrapper">
            <input v-model="startDate" type="text" class="form-input" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/3e14d0c2c0e60d3dfe22b0ba1361183264604d58?placeholderIfAbsent=true"
              alt="" class="calendar-icon" />
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Дата окончания</label>
          <div class="input-wrapper">
            <input v-model="endDate" type="text" class="form-input" placeholder="дд.мм чч.мм" />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/b4bb50155e5c091c68c7fcd204ba848c2ea50977?placeholderIfAbsent=true"
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
                src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/24e0392bbc33a7d9e489af789945c6f801393f99?placeholderIfAbsent=true"
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
  border-radius: vw(20);
  box-shadow: 0 vw(5) vw(15) 0 rgba(39, 18, 47, 0.1);
  width: 100%;
  overflow: hidden;
  background-color: var(--color-white);
}

.section-header {
  background-color: var(--color-gray-200);
  padding: vw(10) vw(20);
}

.section-title {
  font-size: vw(18);
  color: var(--color-gray-900);
  font-weight: 600;
}

.section-content {
  padding: vw(20);
}

.form-group {
  margin-bottom: vw(20);
}

.form-label {
  color: var(--color-gray-900);
  font-size: vw(16);
  font-weight: 500;
  display: block;
  margin-bottom: vw(5);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.form-input {
  border-radius: vw(10);
  border: 1px solid var(--color-gray-200);
  padding: vw(10);
  width: 100%;
  font-size: vw(18);
}

.input-icon {
  position: absolute;
  right: vw(10);
  width: vw(20);
  height: vw(20);
}

.date-group {
  display: flex;
  gap: vw(10);
  flex-wrap: wrap;
  align-items: flex-end;
}

.date-btn {
  border-radius: vw(10);
  background-color: var(--color-primary-700);
  color: var(--color-white);
  padding: vw(10);
  border: none;
  font-size: vw(16);
  font-weight: 500;
  height: vw(40);
}

.price-group {
  margin-top: vw(20);
}

.price-inputs {
  display: flex;
  gap: vw(20);
  flex-wrap: wrap;
}

.price-input-wrapper {
  width: vw(200);
}

.price-input {
  border-radius: vw(15);
  border: 1px solid var(--color-gray-200);
  padding: vw(15);
  display: flex;
  align-items: center;
  min-height: vw(60);
}

.currency {
  color: var(--color-gray-900);
  width: vw(20);
  text-align: center;
}

.free-toggle {
  display: flex;
  align-items: center;
  gap: vw(10);
  margin-top: vw(10);
}

.toggle {
  position: relative;
  display: inline-block;
  width: vw(54);
  height: vw(30);
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
  border-radius: vw(18);
}

.toggle-slider:before {
  position: absolute;
  content: "";
  height: vw(24);
  width: vw(24);
  left: vw(3);
  bottom: vw(3);
  background-color: var(--color-white);
  transition: 0.4s;
  border-radius: 50%;
  box-shadow:
    0 vw(1.5) vw(3) rgba(16, 24, 40, 0.06),
    0 vw(1.5) vw(4.5) rgba(16, 24, 40, 0.1);
}

.toggle input:checked+.toggle-slider {
  background-color: var(--color-primary-700);
}

.toggle input:checked+.toggle-slider:before {
  transform: translateX(vw(24));
}

.toggle-label {
  color: var(--color-gray-900);
  font-size: vw(18);
  font-weight: 400;
}

@media (max-width: 991px) {
  .info-section {
    max-width: 100%;
  }
}
</style>
