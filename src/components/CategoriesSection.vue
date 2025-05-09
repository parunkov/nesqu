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
              src="/icons/arrow.svg"
              alt="" class="arrow-icon open-categories" />
          </div>

          <div class="subcategory-items">
            <label class="category-item">
              <input type="checkbox" class="checkbox" />
              <span class="item-text">Концерты</span>
            </label>

            <label class="category-item">
              <input type="checkbox" class="checkbox" :value="true"/>
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
              src="/icons/arrow.svg"
              alt="" class="arrow-icon" />
          </div>
        </div>

        <!-- Additional subcategories -->
        <div class="subcategory" v-for="category in additionalCategories" :key="category.title">
          <div class="subcategory-header">
            <span class="subcategory-title">{{ category.title }}</span>
            <img
              src="/icons/arrow.svg"
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
              src="/icons/arrow.svg"
              alt="" class="arrow-icon" />
          </div>
        </div>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">🤝 Нетворкинг и профессиональные события</span>
            <img
              src="/icons/arrow.svg"
              alt="" class="arrow-icon" />
          </div>
        </div>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">⚖️ Сферы деятельности</span>
            <img
              src="/icons/arrow.svg"
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
.open-categories{

  transform: rotate(180deg);
}

.categories-section {
  border-radius: 20px;
  box-shadow: 0 5px 15px 0 rgba(39, 18, 47, 0.1);
  min-width: 240px;
  overflow: hidden;
  width: 430px;
  background-color: var(--color-white);
}

.section-header {
  background-color: var(--color-gray-100);
  padding: 10px 20px;
}

.section-title {
  font-size: 18px;
  color: var(--color-gray-1000);
  font-weight: 600;
}

.section-content {
  padding: 20px;
}

.category-group {
  margin-bottom: 20px;
}

.category-title {
  color: var(--color-gray-900);
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
}

.subcategory {
  margin-top: 10px;
}

.subcategory-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-gray-700);
  font-size: 16px;
  padding: 5px 0;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

.subcategory-items {
  margin-top: 10px;
  padding-left: 20px;
}

.category-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  cursor: pointer;
  color: var(--color-gray-1000);
  font-size: 16px;
}

.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-white);
}

.check-icon {
  width: 20px;
  height: 20px;
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

