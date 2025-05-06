<template>
  <section class="info-section" aria-labelledby="info-section-title">
    <header class="section-header">
      <h2 id="info-section-title" class="section-title">Информация</h2>
    </header>

    <div class="section-content">
      <div class="city-field">
        <label class="field-label">Город</label>
        <div class="field-input">
          <span class="input-text">Сочи</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/cab5b4227ad7fa14d18cf9f833b27483c9ba4d37?placeholderIfAbsent=true"
            alt="Select city"
            class="input-icon"
          />
        </div>
      </div>

      <div class="date-fields">
        <div class="date-group">
          <div class="date-field">
            <label class="field-label">Дата начала*</label>
            <div class="date-input">
              <input type="text" value="19.04 19:40" class="time-input" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/3e14d0c2c0e60d3dfe22b0ba1361183264604d58?placeholderIfAbsent=true"
                alt="Select date"
                class="input-icon"
              />
            </div>
          </div>

          <div class="date-field">
            <label class="field-label">Дата окончания</label>
            <div class="date-input">
              <input type="text" placeholder="дд.мм чч.мм" class="time-input" />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/b4bb50155e5c091c68c7fcd204ba848c2ea50977?placeholderIfAbsent=true"
                alt="Select date"
                class="input-icon"
              />
            </div>
          </div>
        </div>

        <div class="date-actions">
          <button type="button" class="action-button">+ День</button>
          <button type="button" class="action-button">+ Неделя</button>
        </div>
      </div>

      <div class="price-field">
        <label class="field-label">Цена</label>
        <div class="price-inputs">
          <div class="price-input">
            <span class="currency">₽</span>
            <input type="text" value="10000" class="amount-input" />
          </div>
          <div class="price-input">
            <span class="currency">₽</span>
            <input type="text" value="10000" class="amount-input" />
          </div>
          <div class="price-input disabled">
            <span class="currency">₽</span>
            <input type="text" value="0" class="amount-input" disabled />
          </div>
        </div>
        <div class="free-toggle">
          <label class="toggle-label">
            <input type="checkbox" class="toggle-input" />
            <span class="toggle-slider"></span>
          </label>
          <span class="toggle-text">Бесплатно</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "./_colors.scss";

.info-section {
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px $shadow-color;
  width: 100%;
  overflow: hidden;
  background-color: $bg-white;
}

.section-header {
  background-color: $bg-gray;
  border-bottom: 1px solid $border-gray;
  padding: 10px 20px;
}

.section-title {
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 18px;
  color: $text-dark;
  font-weight: 600;
  line-height: 2;
}

.section-content {
  padding: 20px;
}

.field-label {
  color: $text-gray;
  font-size: 16px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-weight: 500;
  line-height: 2;
  display: block;
  margin-bottom: 5px;
}

.field-input {
  border-radius: 10px;
  background-color: $bg-light;
  border: 1px solid $border-gray;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.input-text {
  font-size: 18px;
  color: $text-black;
}

.input-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

.date-fields {
  margin-top: 20px;
}

.date-group {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.date-field {
  flex: 1;
}

.date-input {
  border-radius: 10px;
  border: 1px solid $border-gray;
  display: flex;
  align-items: center;
  padding: 10px;
  gap: 10px;
}

.time-input {
  border: none;
  background: none;
  font-size: 20px;
  color: $text-black;
  width: 100%;

  &::placeholder {
    color: $text-light-gray;
  }
}

.date-actions {
  display: flex;
  gap: 5px;
}

.action-button {
  border-radius: 10px;
  background-color: $primary-light-purple;
  border: 1px solid $primary-light-purple;
  color: $bg-white;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
}

.price-field {
  margin-top: 20px;
}

.price-inputs {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.price-input {
  border-radius: 15px;
  border: 1px solid $border-gray;
  display: flex;
  align-items: center;
  padding: 15px;
  width: 200px;

  &.disabled {
    background-color: $bg-light;
  }
}

.currency {
  color: $text-gray;
  width: 20px;
  text-align: center;
}

.amount-input {
  border: none;
  background: none;
  font-size: 20px;
  color: $text-black;
  width: 100%;

  &:disabled {
    color: $text-light-gray;
  }
}

.free-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toggle-label {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 30px;
}

.toggle-input {
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
  background-color: #f2f4f7;
  transition: 0.4s;
  border-radius: 18px;

  &:before {
    position: absolute;
    content: "";
    height: 24px;
    width: 24px;
    left: 3px;
    bottom: 3px;
    background-color: $bg-white;
    transition: 0.4s;
    border-radius: 50%;
    box-shadow:
      0px 1.5px 3px rgba(16, 24, 40, 0.06),
      0px 1.5px 4.5px rgba(16, 24, 40, 0.1);
  }
}

.toggle-text {
  color: $text-gray;
  font-size: 18px;
  font-weight: 400;
}
</style>
