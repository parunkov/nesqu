<script setup lang="ts">
import { ref, nextTick } from 'vue'
import ToggleSwitch from '@/components/ToggleSwitch.vue'

interface PriceValue {
  value: string
  id: number
}

const prices = ref<PriceValue[]>([{ value: '', id: Date.now() }])
const isFree = ref(false)

const formatInput = (val: string) => val.replace(/[^0-9]/g, '').slice(0, 6)

const handlePriceInput = async (index: number) => {
  const price = prices.value[index]
  price.value = formatInput(price.value)

  const isLast = index === prices.value.length - 1
  const isNotEmpty = price.value !== ''

  if (isLast && isNotEmpty) {
    prices.value.push({ value: '', id: Date.now() + Math.random() })
    await nextTick()
  }
}

const deletePrice = (index: number) => {
  if (index < prices.value.length - 1) {
    prices.value.splice(index, 1)
  }
}


</script>

<template>
  <div class="form-group">
    <div class="form-item">
      <label for="" class="form-item__label">Цена</label>

      <div class="form-price">
        <div class="form-price__values" :class="{ disabled: isFree }">
          <div
            class="form-price__value field"
            v-for="(item, index) in prices"
            :key="item.id"
          >
            <span class="form-price__caption">₽</span>
            <input
              class="form-price__input"
              type="text"
              placeholder="0"
              v-model="item.value"
              :disabled="isFree"
              @input="handlePriceInput(index)"
            />
            <button
              v-if="index < prices.length - 1"
              class="form-price__delete"
              type="button"
              @click="deletePrice(index)"
            >
              <!-- SVG Иконка удаления -->
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3333 5.00002V4.33335C13.3333 3.39993 13.3333 2.93322 13.1517 2.5767C12.9919 2.2631 12.7369 2.00813 12.4233 1.84834C12.0668 1.66669 11.6001 1.66669 10.6667 1.66669H9.33333C8.39991 1.66669 7.9332 1.66669 7.57668 1.84834C7.26308 2.00813 7.00811 2.2631 6.84832 2.5767C6.66667 2.93322 6.66667 3.39993 6.66667 4.33335V5.00002M8.33333 9.58335V13.75M11.6667 9.58335V13.75M2.5 5.00002H17.5M15.8333 5.00002V14.3334C15.8333 15.7335 15.8333 16.4336 15.5608 16.9683C15.3212 17.4387 14.9387 17.8212 14.4683 18.0609C13.9335 18.3334 13.2335 18.3334 11.8333 18.3334H8.16667C6.76654 18.3334 6.06647 18.3334 5.53169 18.0609C5.06129 17.8212 4.67883 17.4387 4.43915 16.9683C4.16667 16.4336 4.16667 15.7335 4.16667 14.3334V5.00002" stroke="#F60B0F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div class="form-price__free-checkbox custom-checkbox">
          <label class="custom-checkbox__label">
            <ToggleSwitch v-model="isFree" />
            <span class="custom-checkbox__caption">Бесплатно</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/scss/helpers" as *;

.custom-checkbox {
  // .custom-checkbox__label

  &__label {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  // .custom-checkbox__checkbox

  &__checkbox {
    display: none;
  }

  &__checkbox:checked + &__decor::before {
    left: calc(100% - 27px);
  }

  // .custom-checkbox__decor

  &__decor {
    position: relative;
    width: 54px;
    height: 30px;
    background: #f2f4f7;
    border-radius: 18px;

    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 24px;
      height: 24px;
      background: #fff;
      box-shadow: 0 1px 3px 0 rgba(16, 24, 40, 0.06), 0 1px 4px 0 rgba(16, 24, 40, 0.1);
      border-radius: 50%;

      transition: left .33s ease;
    }
  }

  // .custom-checkbox__caption

  &__caption {
    font-size: 18px;
    line-height: 1.11;
    color: #444145;
    user-select: none;
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


.form-group {
  padding: 20px;

  + .form-group {
    border-top: 1px solid  #edeaee;
  }
}
.form-item {

  // .form-block__label

  &__label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.56;
    color: #444145;
  }
}
.form-price {
  // .form-price__values

  &__values {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    transition: opacity 0.33s ease;

    @include one {
      grid-template-columns: 200px;
    }

    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  // .form-price__value

  &__value {
    display: flex;
    align-items: center;
    padding: 19px 14px;
  }

  // .form-price__caption

  &__caption {
    flex-shrink: 0;
    display: block;
    width: 20px;
    margin-right: 5px;
    text-align: center;
    font-size: 20px;
    line-height: 1;
    color: #444145;
  }

  // .form-price__input

  &__input {
    max-width: 100%;
    width: 100%;
    margin-right: 10px;
    flex-grow: 1;
  }

  // .form-price__delete

  &__delete {
  }

  // .form-price__free-checkbox

  &__free-checkbox {
    margin-top: 15px;
  }

  // .form-price__alert

  &__alert {
  }
}

</style>
