<script setup lang="ts">
import ToggleSwitch from "./ToggleSwitch.vue";
import { watch } from 'vue'
const searchQuery = defineModel<string>('searchQuery');
const activeOnly = defineModel<boolean>('activeOnly');
const emits = defineEmits(["search"])

// const search = () =>{
//   console.log(activeOnly.value);
//   emits('search', activeOnly.value);
// }

watch(() => activeOnly.value, () => emits('search'))

</script>

<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="search-bar__content">
        <img src="/icons/mail.png" class="search-bar__icon" alt="Search icon" />
        <input type="text" class="search-bar__input" placeholder="Поиск по e-mail" @change="emits('search')" v-model="searchQuery" />
        <img src="/icons/search.png" class="search-bar__icon" alt="Clear search" @click="emits('search')" />
      </div>
    </div>
    <label class="toggle-label">Только активные</label>
    <ToggleSwitch v-model="activeOnly" />
  </div>
</template>

<style scoped lang="scss">
.search-container {
  min-width: 700px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;
}

.search-bar {
  border-radius: 10px;
  background-color: var(--color-gray-100);
  border: 1px solid var(--color-gray-400);
  align-self: stretch;
  display: flex;
  min-width: 240px;
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  align-items: stretch;

  font-size: 16px;
  color: var(--color-gray-900);
  font-weight: 400;
  line-height: 1;
  justify-content: center;
  width: 245px;
}

.search-bar__content {
  display: flex;
  width: 100%;
  padding: 10px;
  align-items: center;
  gap: 10px;
  overflow: hidden;
  justify-content: flex-start;
}

.search-bar__icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
}

.search-bar__input {
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex: 1;
  flex-basis: 0;
  background: transparent;
  border: none;
  outline: none;

  font-size: 16px;
  color: var(--color-gray-800);
  min-width: 0;
}

.search-bar__clear-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
  cursor: pointer;
}

.toggle-label {
  color: var(--color-gray-800);
  font-size: 16px;

  font-weight: 400;
  line-height: 1;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
}

@media (max-width: 991px) {
  .search-container {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
</style>
