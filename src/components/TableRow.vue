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

<style scoped>
.row {
  background-color: #fff;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-family:
    Inter,
    -apple-system,
    Roboto,
    Helvetica,
    sans-serif;
  font-size: 16px;
  color: rgba(68, 65, 69, 1);
  font-weight: 400;
  line-height: 1;
}

.cell {
  padding: 10px;
  display: flex;
  align-items: center;
}

.id-cell {
  width: 40px;
  justify-content: center;
}

.checkbox-cell {
  width: 66px;
  justify-content: center;
}

.user-id-cell {
  width: 73px;
}

.email-cell {
  width: 235px;
}

.title-cell {
  flex: 1;
  min-width: 240px;
}

.date-cell {
  width: 155px;
}

.action-cell {
  width: 40px;
  display: flex;
  justify-content: center;
}

.action-icon {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

@media (max-width: 991px) {
  .row {
    max-width: 100%;
  }
}
</style>
