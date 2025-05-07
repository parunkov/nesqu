<template>
  <div class="row">
    <div class="cell id-cell">{{ rowData.id }}</div>
    <div class="cell checkbox-cell">
      <AppCheckbox :model-value="rowData.active" />
    </div>
    <div class="cell checkbox-cell">
      <AppCheckbox :model-value="rowData.top" />
    </div>
    <div class="cell user-id-cell">{{ rowData.userId }}</div>
    <div class="cell email-cell">{{ rowData.email }}</div>
    <div class="cell title-cell">{{ rowData.title }}</div>
    <div class="cell date-cell">{{ rowData.date }}</div>
    <div class="cell action-cell">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/ac4380b2920040a3acca8d67795801e6/e6a3403470659afbea51fe6dba668384b8ef2118?placeholderIfAbsent=true"
        alt="Actions" class="action-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppCheckbox from './AppCheckbox.vue';

interface EventRowData {
  id: number;
  active: boolean;
  top: boolean;
  userId: number;
  email: string;
  title: string;
  date: string;
}

defineProps<{
  rowData: EventRowData;
}>();
</script>

<style scoped lang="scss">
.row {
  background-color: var(--color-white);
  border-radius: vw(20);
  padding: vw(10);
  display: flex;
  align-items: center;
  margin-bottom: vw(10);
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
}

.cell {
  padding: vw(10);
  display: flex;
  align-items: center;
}

.id-cell {
  width: vw(40);
  justify-content: center;
}

.checkbox-cell {
  width: vw(66);
  justify-content: center;
}

.user-id-cell {
  width: vw(73);
}

.email-cell {
  width: vw(235);
}

.title-cell {
  flex: 1;
  min-width: vw(240);
}

.date-cell {
  width: vw(155);
}

.action-cell {
  width: vw(40);
  display: flex;
  justify-content: center;
}

.action-icon {
  width: vw(20);
  height: vw(20);
  object-fit: contain;
}

@media (max-width: 991px) {
  .row {
    max-width: 100%;
  }
}
</style>
