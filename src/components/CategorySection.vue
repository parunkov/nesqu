<template>
  <section class="category-section" aria-labelledby="category-section-title">
    <header class="section-header">
      <h2 id="category-section-title" class="section-title">Категории</h2>
    </header>

    <div class="section-content">
      <div class="category-group">
        <h3 class="category-group-title">Развлекательные мероприятия</h3>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">🎭 Культура и творчество</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/d120d173784c19fbd1937ca48f459558bf71f54c?placeholderIfAbsent=true"
              alt="Expand"
              class="expand-icon"
            />
          </div>

          <div class="category-options">
            <label class="category-option">
              <input type="checkbox" class="checkbox" />
              <span class="option-text">Концерты</span>
            </label>

            <label class="category-option selected">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/2bf4b50e06316a1d63c5e47816fef7d900fdf977?placeholderIfAbsent=true"
                alt="Selected"
                class="selected-icon"
              />
              <span class="option-text">Театр</span>
            </label>

            <label class="category-option">
              <input type="checkbox" class="checkbox" />
              <span class="option-text">Выставки</span>
            </label>

            <label class="category-option">
              <input type="checkbox" class="checkbox" />
              <span class="option-text">Фестивали</span>
            </label>

            <label class="category-option">
              <input type="checkbox" class="checkbox" />
              <span class="option-text">Стендап</span>
            </label>

            <label class="category-option">
              <input type="checkbox" class="checkbox" />
              <span class="option-text">Кино</span>
            </label>
          </div>
        </div>

        <!-- Additional subcategories -->
        <div class="subcategory collapsed">
          <div class="subcategory-header">
            <span class="subcategory-title">🎨 Хобби и креатив</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt="Expand"
              class="expand-icon"
            />
          </div>
        </div>

        <!-- More subcategories... -->
      </div>

      <div class="category-group">
        <h3 class="category-group-title">Деловые мероприятия</h3>

        <div class="subcategory collapsed">
          <div class="subcategory-header">
            <span class="subcategory-title">🧠 Образование и развитие</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt="Expand"
              class="expand-icon"
            />
          </div>
        </div>

        <!-- More business subcategories... -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import './_colors.scss';

.category-section {
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px $shadow-color;
  min-width: 240px;
  overflow: hidden;
  width: 430px;
  background-color: $bg-white;

  @media (max-width: 991px) {
    max-width: 100%;
  }
}

.section-header {
  background-color: $bg-gray;
  border-bottom: 1px solid $border-gray;
  padding: 10px 20px;
}

.section-title {
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 18px;
  color: $text-dark;
  font-weight: 600;
  line-height: 2;
}

.section-content {
  padding: 20px;
}

.category-group {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.category-group-title {
  color: $text-gray;
  font-size: 16px;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 2;
  margin-bottom: 5px;
}

.subcategory {
  margin-top: 10px;

  &.collapsed {
    .category-options {
      display: none;
    }
  }