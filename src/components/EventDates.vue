<script setup lang="ts">
import { ref, nextTick } from 'vue'
import AppButton from '@/components/AppButton.vue'
import type { Event as EventType, DateTime } from '@/types/events.ts'

interface DateRow {
  startDate: string
  startTime: string
  endDate: string
  endTime: string
  showActions: boolean
  showHint: boolean
}

const props = defineProps({
  startDates: {
    type: Array<DateTime>,
    default: [],
  },
})

const dates = ref<EventType['datetime']>(props.startDates)

const emit = defineEmits(['updateDates'])

const rows = ref<DateRow[]>(convertToDateRows(props.startDates))

// watch(
//   () => props.startDates,
//   () => {
//     dates.value = props.startDates
//     rows.value = convertToDateRows(props.startDates)
//   },
//   { deep: true, once: true, immediate: false },
// )

function convertToDateRows(target: DateTime[]): DateRow[] {
  return target.map(({ from, to }) => {
    const [startDateRaw, startTime] = from.split('T')
    const [, startMonth, startDay] = startDateRaw.split('-')
    const startDate = `${startDay}:${startMonth}`

    let endDate = ''
    let endTime = ''

    if (to && to.includes('T')) {
      const [endDateRaw, endTimeRaw] = to.split('T')
      const [, endMonth, endDay] = endDateRaw.split('-')
      endDate = `${endDay}:${endMonth}`
      endTime = endTimeRaw
    }

    return {
      startDate,
      startTime,
      endDate,
      endTime,
      showActions: false,
      showHint: false,
    }
  })
}

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
  return value.length === 5
}

const toIsoDateTime = (dateStr: string, timeStr?: string): string | null => {
  if (!dateStr || dateStr.length !== 5) return null

  const [day, month] = dateStr.split('.').map(Number)
  const year = 2025

  if (timeStr && timeStr.length === 5) {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${timeStr}:00`
  } else {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T00:00:00`
  }
}

const updateDatesAndEmit = () => {
  dates.value = rows.value
    .map((row) => {
      const from = toIsoDateTime(row.startDate, row.startTime)
      if (!from) return null

      const to = row.endDate ? toIsoDateTime(row.endDate, row.endTime) : undefined

      return to ? { from, to } : { from }
    })
    .filter((item): item is { from: string; to?: string } => item !== null)

  emit('updateDates', dates.value)
}

const handleInput = async (
  e: Event,
  rowIndex: number,
  field: 'startDate' | 'startTime' | 'endDate' | 'endTime',
  isDate: boolean,
) => {
  const input = e.target as HTMLInputElement
  const value = input.value
  const formatted = formatInput(value, isDate)
  rows.value[rowIndex][field] = formatted

  // Логика для показа действий и подсказок
  if (isDate && formatted.length === 5 && field === 'startDate') {
    rows.value[rowIndex].showActions = true
    await nextTick()
    focusInput(rowIndex, 'startTime')
  }

  if (field !== 'startDate' && rows.value[rowIndex].startDate.length < 5) {
    rows.value[rowIndex].showHint = true
    await nextTick()
    focusInput(rowIndex, 'startDate')
  } else {
    rows.value[rowIndex].showHint = false
  }

  if (field === 'endDate' && rows.value[rowIndex].endDate.length == 5) {
    focusInput(rowIndex, 'endTime')
  }

  // Вызов emit только если поле полностью заполнено
  if (isFieldComplete(formatted)) {
    updateDatesAndEmit()
  }
}

const focusInput = (rowIndex: number, field: keyof DateRow) => {
  const input = document.querySelectorAll<HTMLInputElement>(
    `.row-${rowIndex} input[data-field="${field}"]`,
  )[0]
  input?.focus()
}

const handleBlur = (rowIndex: number) => {
  const date = rows.value[rowIndex].startDate.replace(/[^0-9]/g, '')
  if (date.length < 4 && rowIndex !== rows.value.length - 1) {
    rows.value.splice(rowIndex, 1)
  }
}
const isRowComplete = (row: DateRow): boolean => {
  // Проверяем, что у строки заполнены полностью startDate, startTime
  // Можно добавить проверку endDate и endTime, если они есть (но не обязательны)
  return (
    row.startDate.length === 5 &&
    row.startTime.length === 5 &&
    (!row.endDate || row.endDate.length === 5) &&
    (!row.endTime || row.endTime.length === 5)
  )
}

const addDate = async () => {
  const newRow: DateRow = {
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    showActions: true,
    showHint: false,
  }

  rows.value.push(newRow)

  await nextTick()
  focusInput(rows.value.length - 1, 'startDate')

  if (isRowComplete(newRow)) {
    updateDatesAndEmit()
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
          <div class="form-date__element form-item">
            <label class="form-item__label">Начало</label>
            <div class="form-date__dates">
              <div class="form-date__values field" :class="{ filled: row.startDate.length === 5 }">
                <img src="/icons/black-calendar.svg" />
                <input
                  class="form-date__input form-date__input-date"
                  type="text"
                  placeholder="ДД.ММ"
                  v-model="row.startDate"
                  data-field="startDate"
                  @input="(e) => handleInput(e, rowIndex, 'startDate', true)"
                  @blur="() => handleBlur(rowIndex)"
                />
              </div>
              <div
                class="form-date__values field"
                :class="{ filled: row.startTime.length === 5, disabled: row.startDate.length < 5 }"
              >
                <img src="/icons/black-time.svg" />
                <input
                  class="form-date__input form-date__input-time"
                  type="text"
                  placeholder="ЧЧ:ММ"
                  v-model="row.startTime"
                  data-field="startTime"
                  @input="(e) => handleInput(e, rowIndex, 'startTime', false)"
                  :disabled="row.startDate.length < 5"
                />
              </div>
            </div>
          </div>

          <span class="form-date__item-separator"></span>

          <div class="form-date__element form-item">
            <label class="form-item__label">Окончание</label>
            <div class="form-date__dates">
              <div
                class="form-date__values field"
                :class="{ filled: row.endDate.length === 5, disabled: row.startDate.length < 5 }"
              >
                <img src="/icons/black-calendar.svg" />
                <input
                  class="form-date__input form-date__input-date"
                  type="text"
                  placeholder="ДД.ММ"
                  v-model="row.endDate"
                  data-field="endDate"
                  @input="(e) => handleInput(e, rowIndex, 'endDate', true)"
                  :disabled="row.startDate.length < 5"
                />
              </div>
              <div
                class="form-date__values field"
                :class="{ filled: row.endTime.length === 5, disabled: row.startDate.length < 5 }"
              >
                <img src="/icons/black-time.svg" />
                <input
                  class="form-date__input form-date__input-time"
                  type="text"
                  placeholder="ЧЧ:ММ"
                  v-model="row.endTime"
                  data-field="endTime"
                  @input="(e) => handleInput(e, rowIndex, 'endTime', false)"
                  :disabled="row.startDate.length < 5"
                />
              </div>
            </div>
            <p
              v-if="row.showHint"
              class="form-date__hint"
              style="opacity: 1; transform: translateY(0)"
            >
              Введите дату начала!
            </p>
          </div>

          <button
            v-if="rowIndex !== 0"
            class="button button--danger button--outline form-date__remove-btn"
            @click="rows.splice(rowIndex, 1)"
          />
        </div>
      </div>

      <!-- Actions -->
      <div class="form-date__actions" style="opacity: 1; transform: translateY(0)">
        <AppButton class="form-date__add-day-btn" @click="addDate"> + Добавить дату</AppButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/scss/helpers' as *;

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
    color: #f60b0f;
  }

  &--outline {
    background: none;
    border-color: currentColor;
  }
}

.form-group {
  padding: 20px;

  + .form-group {
    border-top: 1px solid var(--color-gray-300);
  }
}

.field {
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid var(--color-gray-300);
  border-radius: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.11;
  color: #000;
  background: #f9f6fa;

  transition:
    border-color 0.33s ease,
    background 0.33s ease;

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
  &__dates {
    display: flex;
    gap: 5px;
  }

  &__row {
    display: flex;
    flex-direction: column;
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
    max-width: 205px;
  }

  // .form-date__values
  .disabled,
  .filled {
    border-color: #767377;
  }

  &__values {
    display: flex;
    gap: 5px;

    &:disabled {
      border-color: #767377;
    }
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
    margin-top: 20px;
  }

  // .form-date__remove-btn

  &__add-day-btn,
  &__remove-btn {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__remove-btn {
    height: 24px;
    width: 24px;
    align-self: self-end;
  }

  &__remove-btn {
    &::before {
      content: '';
      display: block;
      width: 14px;
      height: 2px;
      background: #f60b0f;
      border-radius: 50%;
    }
  }
}
</style>
