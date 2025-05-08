<template>
  <section class="categories-section">
    <header class="section-header">
      <h2 class="section-title">Категории</h2>
    </header>

    <div class="section-content">
      <div class="category-group">
        <h3 class="category-title">Развлекательные мероприятия</h3>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">🎭 Культура и творчество</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/d120d173784c19fbd1937ca48f459558bf71f54c?placeholderIfAbsent=true"
              alt="" class="arrow-icon" />
          </div>

          <div class="subcategory-items">
            <label class="category-item">
              <input type="checkbox" class="checkbox" />
              <span class="item-text">Концерты</span>
            </label>

            <label class="category-item selected">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/2bf4b50e06316a1d63c5e47816fef7d900fdf977?placeholderIfAbsent=true"
                alt="" class="check-icon" />
              <span class="item-text">Театр</span>
            </label>

            <label class="category-item">
              <input type="checkbox" class="checkbox" />
              <span class="item-text">Выставки</span>
            </label>

            <label class="category-item">
              <input type="checkbox" class="checkbox" />
              <span class="item-text">Фестивали</span>
            </label>

            <label class="category-item">
              <input type="checkbox" class="checkbox" />
              <span class="item-text">Стендап</span>
            </label>

            <label class="category-item">
              <input type="checkbox" class="checkbox" />
              <span class="item-text">Кино</span>
            </label>
          </div>
        </div>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">🎨 Хобби и креатив</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt="" class="arrow-icon" />
          </div>
        </div>

        <!-- Additional subcategories -->
        <div class="subcategory" v-for="category in additionalCategories" :key="category.title">
          <div class="subcategory-header">
            <span class="subcategory-title">{{ category.title }}</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt="" class="arrow-icon" />
          </div>
        </div>
      </div>

      <div class="category-group">
        <h3 class="category-title">Деловые мероприятия</h3>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">🧠 Образование и развитие</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt="" class="arrow-icon" />
          </div>
        </div>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">🤝 Нетворкинг и профессиональные события</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/5a0ce6b165b7f9cc892cf0a91bc9352353f5b435?placeholderIfAbsent=true"
              alt="" class="arrow-icon" />
          </div>
        </div>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">⚖️ Сферы деятельности</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt="" class="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const additionalCategories = ref([
  { title: "🏃 Активный отдых и спорт" },
  { title: "👶 Детские события" },
  { title: "🍽️ Гастрономические мероприятия" },
  { title: "🎉 Развлечения и вечеринки" },
]);
</script>
<style scoped lang="scss">
.categories-section {
  border-radius: vw(20);
  /* заменено на vw */
  box-shadow: 0 vw(5) vw(15) 0 rgba(39, 18, 47, 0.1);
  /* заменено на vw */
  min-width: vw(240);
  /* заменено на vw */
  overflow: hidden;
  width: vw(430);
  /* заменено на vw */
  background-color: var(--color-white);
  /* заменено на var(--color-white) */
}

.section-header {
  background-color: var(--color-gray-100);
  /* заменено на var(--color-gray-100) */
  padding: vw(10) vw(20);
  /* заменено на vw */
}

.section-title {
  font-size: vw(18);
  /* заменено на vw */
  color: var(--color-gray-1000);
  /* заменено на var(--color-gray-1000) */
  font-weight: 600;
}

.section-content {
  padding: vw(20);
  /* заменено на vw */
}

.category-group {
  margin-bottom: vw(20);
  /* заменено на vw */
}

.category-title {
  color: var(--color-gray-900);
  /* заменено на var(--color-gray-900) */
  font-size: vw(16);
  /* заменено на vw */
  font-weight: 500;
  margin-bottom: vw(5);
  /* заменено на vw */
}

.subcategory {
  margin-top: vw(10);
  /* заменено на vw */
}

.subcategory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-gray-700);
  /* заменено на var(--color-gray-700) */
  font-size: vw(16);
  /* заменено на vw */
  padding: vw(5) 0;
  /* заменено на vw */
}

.arrow-icon {
  width: vw(20);
  /* заменено на vw */
  height: vw(20);
  /* заменено на vw */
}

.subcategory-items {
  margin-top: vw(10);
  /* заменено на vw */
  padding-left: vw(20);
  /* заменено на vw */
}

.category-item {
  display: flex;
  align-items: center;
  gap: vw(10);
  /* заменено на vw */
  padding: vw(5) 0;
  /* заменено на vw */
  cursor: pointer;
  color: var(--color-gray-1000);
  /* заменено на var(--color-gray-1000) */
  font-size: vw(16);
  /* заменено на vw */
}

.checkbox {
  width: vw(20);
  /* заменено на vw */
  height: vw(20);
  /* заменено на vw */
  border-radius: vw(6);
  /* заменено на vw */
  border: 1px solid var(--color-gray-300);
  /* заменено на var(--color-gray-300) */
  background-color: var(--color-white);
  /* заменено на var(--color-white) */
}

.check-icon {
  width: vw(20);
  /* заменено на vw */
  height: vw(20);
  /* заменено на vw */
}

.item-text {
  flex: 1;
}

@media (max-width: 991px) {
  .categories-section {
    max-width: 100%;
  }
}
</style>
