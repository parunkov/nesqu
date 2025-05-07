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
              alt=""
              class="arrow-icon"
            />
          </div>

          <div class="subcategory-items">
            <label class="category-item">
              <input type="checkbox" class="checkbox" />
              <span class="item-text">Концерты</span>
            </label>

            <label class="category-item selected">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/2bf4b50e06316a1d63c5e47816fef7d900fdf977?placeholderIfAbsent=true"
                alt=""
                class="check-icon"
              />
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
              alt=""
              class="arrow-icon"
            />
          </div>
        </div>

        <!-- Additional subcategories -->
        <div
          class="subcategory"
          v-for="category in additionalCategories"
          :key="category.title"
        >
          <div class="subcategory-header">
            <span class="subcategory-title">{{ category.title }}</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt=""
              class="arrow-icon"
            />
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
              alt=""
              class="arrow-icon"
            />
          </div>
        </div>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title"
              >🤝 Нетворкинг и профессиональные события</span
            >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/5a0ce6b165b7f9cc892cf0a91bc9352353f5b435?placeholderIfAbsent=true"
              alt=""
              class="arrow-icon"
            />
          </div>
        </div>

        <div class="subcategory">
          <div class="subcategory-header">
            <span class="subcategory-title">⚖️ Сферы деятельности</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/4fd765603d7a48d6b95006cfb8796273cce87a43?placeholderIfAbsent=true"
              alt=""
              class="arrow-icon"
            />
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

<style scoped>
.categories-section {
  border-radius: 20px;
  box-shadow: 0px 5px 15px 0px rgba(39, 18, 47, 0.1);
  min-width: 240px;
  overflow: hidden;
  width: 430px;
  background-color: #fff;
}

.section-header {
  background-color: rgba(237, 234, 238, 1);
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
  color: #242125;
  font-weight: 600;
}

.section-content {
  padding: 20px;
}

.category-group {
  margin-bottom: 20px;
}

.category-title {
  color: rgba(68, 65, 69, 1);
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
  color: #767377;
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
  color: rgba(36, 33, 37, 1);
  font-size: 16px;
}

.checkbox {
  width: 20px;
  height: 20px;
  border-radius: 6px;
  border: 1px solid var(--Gray-300, #d0d5dd);
  background-color: #fff;
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
