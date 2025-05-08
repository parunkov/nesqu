<script setup lang="ts">
import { ref } from "vue";
import ToggleSwitch from "./ToggleSwitch.vue";

const emits = defineEmits(["search", "toggle-active"])
const searchQuery = ref("");
const activeOnly = ref(true);

const clearSearch = () => {
  searchQuery.value = "";
  emits("search", "");
};

</script>

<template>
  <div class="search-container">
    <div class="search-bar">
      <div class="search-bar__content">
        <img src="/icons/mail.png" class="search-bar__icon" alt="Search icon" />
        <input type="text" class="search-bar__input" placeholder="Поиск по e-mail" v-model="searchQuery" />
        <img src="/icons/search.png" class="search-bar__icon" alt="Clear search" @click="clearSearch" />
      </div>
    </div>
    <label class="toggle-label">Только активные</label>
    <ToggleSwitch v-model="activeOnly" />
  </div>
</template>
<style scoped lang="scss">
.search-container {
  display: flex;
  align-items: center;
  gap: vw(20);
  justify-content: flex-start;
}

.search-bar {
  border-radius: vw(10);
  background-color: var(--color-gray-100);
  border: vw(1) solid var(--color-gray-400);
  align-self: stretch;
  display: flex;
  min-width: vw(240);
  margin-top: auto;
  margin-bottom: auto;
  flex-direction: column;
  align-items: stretch;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: vw(16);
  color: var(--color-gray-900);
  font-weight: 400;
  line-height: 1;
  justify-content: center;
  width: vw(245);
}

.search-bar__content {
  display: flex;
  width: 100%;
  padding: vw(10);
  align-items: center;
  gap: vw(10);
  overflow: hidden;
  justify-content: flex-start;
}

.search-bar__icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: vw(20);
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
  flex-shrink: 1;
  flex-basis: 0%;
  background: transparent;
  border: none;
  outline: none;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: vw(16);
  color: var(--color-gray-800);
  min-width: 0;
}

.search-bar__clear-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: vw(20);
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
  cursor: pointer;
}

.toggle-label {
  color: var(--color-gray-800);
  font-size: vw(16);
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
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
