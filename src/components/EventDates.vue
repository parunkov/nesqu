<script setup lang="ts">
import { ref, nextTick } from 'vue'
import AppButton from '@/components/AppButton.vue'
import type { Event as EventType } from '@/types/events.ts'

const dates = ref<EventType['datetime']>([])
const emit = defineEmits(['updateDates'])

interface DateRow {
  startDate: string
  startTime: string
  endDate: string
  endTime: string
  showActions: boolean
  showHint: boolean
}

const rows = ref<DateRow[]>([
  { startDate: '', startTime: '', endDate: '', endTime: '', showActions: false, showHint: false }
])


const formatInput = (value: string, isDate: boolean): string => {
  value = value.replace(/[^0-9_]/g, '')
  const separator = isDate ? '.' : ':'
  let formatted = ''
  value = value.slice(0, 4)
  if (value.length > 2) {
    formatted = value.slice(0, 2) + separator + value.slice(2)
  } else if (value.length > 0) {
    formatted = value
  }
  return formatted
}

const isFieldComplete = (value: string): boolean => {
  // Проверяем, что строка полностью заполнена (формат: 5 символов)
  return value.length === 5;
}

const toIsoDateTime = (dateStr: string, timeStr?: string): string | null => {
  // dateStr: 'dd.mm'
  // timeStr: 'HH:mm' или undefined
  if (!dateStr || dateStr.length !== 5) return null;

  const [day, month] = dateStr.split('.').map(Number);
  const year = 2026; // фиксируем год, или вынеси как параметр, если нужно динамически

  if (timeStr && timeStr.length === 5) {
    // Формируем ISO строку с временем и секундами
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${timeStr}:00`;
  } else {
    // Формируем ISO строку только с датой (время 00:00:00)
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T00:00:00`;
  }
}

const updateDatesAndEmit = () => {
  dates.value = rows.value
    .map(row => {
      const from = toIsoDateTime(row.startDate, row.startTime);
      if (!from) return null; // from - обязательное поле

      const to = row.endDate ? toIsoDateTime(row.endDate, row.endTime) : undefined;

      return to ? { from, to } : { from };
    })
    .filter((item): item is { from: string; to?: string } => item !== null);

  emit('updateDates', dates.value);
}


const handleInput = async (
  e: Event,
  rowIndex: number,
  field: 'startDate' | 'startTime' | 'endDate' | 'endTime',
  isDate: boolean
) => {
  const input = e.target as HTMLInputElement;
  const value = input.value;
  const formatted = formatInput(value, isDate);
  rows.value[rowIndex][field] = formatted;

  // Логика для показа действий и подсказок
  if (isDate && formatted.length === 5 && field === 'startDate') {
    rows.value[rowIndex].showActions = true;
    await nextTick();
    focusInput(rowIndex, 'startTime');
  }

  if (field !== 'startDate' && rows.value[rowIndex].startDate.length < 5) {
    rows.value[rowIndex].showHint = true;
    await nextTick();
    focusInput(rowIndex, 'startDate');
  } else {
    rows.value[rowIndex].showHint = false;
  }

  // Вызов emit только если поле полностью заполнено
  if (isFieldComplete(formatted)) {
    updateDatesAndEmit();
  }
}


const focusInput = (rowIndex: number, field: keyof DateRow) => {
  const input = document.querySelectorAll<HTMLInputElement>(
    `.row-${rowIndex} input[data-field="${field}"]`
  )[0]
  input?.focus()
}

const handleBlur = (rowIndex: number) => {
  const date = rows.value[rowIndex].startDate.replace(/[^0-9]/g, '')
  if (date.length < 4 && rowIndex !== rows.value.length - 1) {
    rows.value.splice(rowIndex, 1)
  }
}

const shiftDate = (dateStr: string, days: number): string => {
  if (!dateStr || dateStr.length !== 5) return ''
  const [day, month] = dateStr.split('.').map(Number)
  const date = new Date(2025, month - 1, day + days)
  return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}`
}
const isRowComplete = (row: DateRow): boolean => {
  // Проверяем, что у строки заполнены полностью startDate, startTime
  // Можно добавить проверку endDate и endTime, если они есть (но не обязательны)
  return (
    row.startDate.length === 5 &&
    row.startTime.length === 5 &&
    (!row.endDate || row.endDate.length === 5) &&
    (!row.endTime || row.endTime.length === 5)
  );
}

const duplicateRowWithShift = async (rowIndex: number, days: number) => {
  const currentRow = rows.value[rowIndex];
  const newStartDate = shiftDate(currentRow.startDate, days);
  const newEndDate = currentRow.endDate
    ? shiftDate(currentRow.endDate, days)
    : '';

  const newRow: DateRow = {
    startDate: newStartDate,
    startTime: currentRow.startTime,
    endDate: newEndDate,
    endTime: currentRow.endTime,
    showActions: true,
    showHint: false
  };

  rows.value.splice(rowIndex + 1, 0, newRow);

  await nextTick();
  focusInput(rowIndex + 1, 'startTime');

  // Если новая строка полностью заполнена — обновляем dates и эмитим
  if (isRowComplete(newRow)) {
    updateDatesAndEmit();
  }
}
</script>

<template>
  <div class="form-group">
    <div class="form-date">
      <div
        class="form-date__row"
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        :class="`row-${rowIndex}`"
      >
        <div class="form-date__item">
          <!-- Start Date -->
          <div class="form-date__element form-item">
            <label class="form-item__label">Дата начала*</label>
            <div class="form-date__values field">
              <input
                class="form-date__input form-date__input-date"
                type="text"
                placeholder="ДД.ММ"
                v-model="row.startDate"
                data-field="startDate"
                @input="e => handleInput(e, rowIndex, 'startDate', true)"
                @blur="() => handleBlur(rowIndex)"
              />
              <input
                class="form-date__input form-date__input-time"
                type="text"
                placeholder="ЧЧ:ММ"
                v-model="row.startTime"
                data-field="startTime"
                @input="e => handleInput(e, rowIndex, 'startTime', false)"
                :disabled="row.startDate.length < 5"
              />
            </div>
            <p
              v-if="row.showHint"
              class="form-date__hint"
              style="opacity: 1; transform: translateY(0)"
            >
              Введите дату начала!
            </p>
          </div>

          <span class="form-date__item-separator"></span>

          <!-- End Date -->
          <div class="form-date__element form-item">
            <label class="form-item__label">Дата окончания</label>
            <div class="form-date__values field">
              <input
                class="form-date__input form-date__input-date"
                type="text"
                placeholder="ДД.ММ"
                v-model="row.endDate"
                data-field="endDate"
                @input="e => handleInput(e, rowIndex, 'endDate', true)"
                :disabled="row.startDate.length < 5"
              />
              <input
                class="form-date__input form-date__input-time"
                type="text"
                placeholder="ЧЧ:ММ"
                v-model="row.endTime"
                data-field="endTime"
                @input="e => handleInput(e, rowIndex, 'endTime', false)"
                :disabled="row.startDate.length < 5"
              />
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div
          v-if="row.showActions "
          class="form-date__actions"
          style="opacity: 1; transform: translateY(0)"
        >

          <button v-if="rowIndex != 0"
            class="button button--danger button--outline form-date__remove-btn"
            @click="rows.splice(rowIndex, 1)"
          />
          <AppButton class="form-date__add-day-btn" @click="duplicateRowWithShift(rowIndex, 1)">
            + День
          </AppButton>
          <AppButton class="form-date__add-day-btn" @click="duplicateRowWithShift(rowIndex, 7)">
            + Неделя
          </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/helpers" as *;



.button {
  padding: 19px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.11;
  color: #fff;
  background: #9218c0;
  border-radius: 10px;
  border: 1px solid #9218c0;
  stroke: currentColor;

  &--icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &--danger {
    color:  #f60b0f;
  }

  &--outline {
    background: none;
    border-color: currentColor;
  }
}

.form-group {
  padding: 20px;

  + .form-group {
    border-top: 1px solid  #edeaee;
  }
}
.field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #edeaee;
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.11;
  color: #000;
  background: #f9f6fa;

  transition: border-color 0.33s ease, background 0.33s ease;

  &::placeholder {
    color: #767377;
    font-size: inherit;
  }

  &:focus,
  &:has(input:focus) {
    border-color: #9218c0;
  }

  &--textarea {
    min-height: 120px;
  }
}

:is(input, textarea).field:not(:placeholder-shown),
.field:has(input:not(:placeholder-shown)) {
  background: #fff;
}
.form-date {
  // .form-date__row

  &__row {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  &__row + &__row {
    margin-top: 20px;
  }

  // .form-date__item

  &__item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  // .form-date__element&& rowIndex != 0

  &__element {
    max-width: 185px;
  }

  // .form-date__values

  &__values {
    display: flex;
    gap: 5px;
  }

  &__hint {
    height: 0;
    font-size: 10px;
    color: #f60b0f;
    margin-top: 2px;
  }

  // .form-date__input

  &__input {
    width: 5ch;
    font-size: inherit;
    font-family: inherit;

    &::placeholder {
      color: #767377;
      font-family: inherit;
      font-size: inherit;
      text-transform: lowercase;
    }
  }

  // .form-date__item-separator

  &__item-separator {
    align-self: flex-end;
    height: 1px;
    width: 10px;
    margin: 20px 0;
    background: #9f9ca0;
  }

  // .form-date__actions

  &__actions {
    display: flex;
    align-items: flex-end;
    gap: 10px;
  }

  // .form-date__remove-btn

  &__add-day-btn,
  &__remove-btn,
  &__add-week-btn {
    min-width: 40px;
    height: 40px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__remove-btn {
    &::before {
      content: "";
      display: block;
      width: 14px;
      height: 2px;
      background: #f60b0f;
      border-radius: 50%;
    }
  }
}

</style>
