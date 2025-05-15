<template>
  <div class="content-card">
    <div class="content-card__inner">
      <div class="content-card__head">
        <h3 class="content-card__title">
          Категории
        </h3>
      </div>

      <div class="content-card__body">
        <div @click.stop class="filters__list">
          <AppAccordion @closeOthers="(flag: boolean = false) => closeOthers(filterIndex, flag)"
                        v-for="(filter, filterIndex) of filters" class="filters__item" v-model="model[filterIndex]" :key="filterIndex">
            <template #btn>
              {{ filter.group_name }}
            </template>
            <template #content>
              <div class="filters__item-main">
                <AppCheckbox @click.stop v-for="(item, itemIndex) of filter.group_content" class="filters__item-checkbox"
                             v-model="selectedFilters[filter.group_name][item.id]" :key="itemIndex">
                  {{ item.type_name }}
                </AppCheckbox>
              </div>
            </template>
          </AppAccordion>
        </div>
      </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, watchEffect } from 'vue'
import AppAccordion from '@/components/AppAccordion.vue'
import AppCheckbox from '@/components/AppCheckbox.vue'

const closeOthers = (index: number, flag: boolean = false) => {
  for (let i = 0; i < model.value.length; i++) {
    model.value[i] = i == index ? flag : false
  }
}

type EventGroup = {
  group_name: string;
  group_content: {
    id: number | string;
    type_name: string;
  }[];
}

const filters = reactive<EventGroup[]>([
  {
    group_name: "🧠 Образование и развитие",
    group_content: [
      { id: 29, type_name: "Обучение" },
      { id: 28, type_name: "Мастер-классы" },
      { id: 4, type_name: "Форумы" },
      { id: 3, type_name: "Конференции" },
      { id: 2, type_name: "Тренинги" },
      { id: 1, type_name: "Лекции" }
    ]
  },
  {
    group_name: "🤝 Нетворкинг и профсобытия",
    group_content: [
      { id: 30, type_name: "Нетворкинг" },
      { id: 7, type_name: "Мастермайнды" },
      { id: 6, type_name: "Бизнес-встречи" }
    ]
  },
  {
    group_name: "⚖️ Сферы деятельности",
    group_content: [
      { id: 53, type_name: "Дизайн" },
      { id: 47, type_name: "Управление проектами" },
      { id: 46, type_name: "Медицина" },
      { id: 45, type_name: "Наука" },
      { id: 44, type_name: "Сфера услуг" },
      { id: 43, type_name: "Маркетинг" },
      { id: 9, type_name: "Финансы" },
      { id: 10, type_name: "Мода" },
      { id: 8, type_name: "IT и технологии" }
    ]
  },
  {
    group_name: "🎨 Хобби и креатив",
    group_content: [
      { id: 17, type_name: "Творчество" },
      { id: 16, type_name: "Танцы" },
      { id: 15, type_name: "Музыка" }
    ]
  },
  {
    group_name: "🏃 Активный отдых и спорт",
    group_content: [
      { id: 18, type_name: "Походы и экскурсии" },
      { id: 19, type_name: "Спорт и фитнес" }
    ]
  },
  {
    group_name: "🍽️ Гастрономические мероприятия",
    group_content: [
      { id: 38, type_name: "Винные вечера " },
      { id: 37, type_name: "Гастрономические " },
      { id: 22, type_name: "Дегустации" }
    ]
  },
  {
    group_name: "👶 Семейные мероприятия",
    group_content: [
      { id: 52, type_name: "Мамам" },
      { id: 20, type_name: "Семейный досуг" },
      { id: 36, type_name: "Развивающие" },
      { id: 21, type_name: "Детям" }
    ]
  },
  {
    group_name: "🙏 Путь к себе",
    group_content: [
      { id: 5, type_name: "Психология для всех" },
      { id: 50, type_name: "Оздоровление" },
      { id: 49, type_name: "Ретриты" },
      { id: 41, type_name: "Медитации и практики " },
      { id: 34, type_name: "Йога" }
    ]
  },
  {
    group_name: "🎭 Развлекательная программа",
    group_content: [
      { id: 39, type_name: "Вечеринки " },
      { id: 40, type_name: "Фестивали " },
      { id: 51, type_name: "Stand Up" },
      { id: 26, type_name: "Встречи" },
      { id: 25, type_name: "Знакомства" },
      { id: 24, type_name: "Клуб" },
      { id: 23, type_name: "Квесты и игры" },
      { id: 32, type_name: "Цирк " },
      { id: 14, type_name: "Кино" },
      { id: 13, type_name: "Выставки" },
      { id: 12, type_name: "Театр" },
      { id: 11, type_name: "Концерты" }
    ]
  },
  {
    group_name: "😌 Другое",
    group_content: [
      { id: 48, type_name: "Другое" }
    ]
  }
])
const model = ref<boolean[]>(filters.map(((_, index) => index == 0)))
const selectedFilters = reactive<Record<string, Record<string, boolean>>>({});
watchEffect(() => {
  filters.forEach(filter => {
    if (!selectedFilters[filter.group_name]) {
      selectedFilters[filter.group_name] = {};
    }
    filter.group_content.forEach(item => {
      if (selectedFilters[filter.group_name][item.id] === undefined) {
        selectedFilters[filter.group_name][item.id] = false;
      }
    });
  });
});

</script>

<style scoped lang="scss">
@use "../assets/scss/helpers" as *;

.content-card {
  box-shadow: 0 5px 15px 0 rgba(39, 18, 47, 0.1);
  border-radius: 20px;
  background: #fff;


  + .content-card {
    margin-top: 20px;
  }

  // .content-card__inner

  &__inner {
  }

  // .content-card__head

  &__head {
    padding: 10px 20px;
    background: #edeaee;
    border-radius: 20px 20px 0 0;
  }

  // .content-card__title

  &__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.67;
    color: #242125;
  }

  // .content-card__body

  &__body {
    padding: 20px;
  }
}
</style>

