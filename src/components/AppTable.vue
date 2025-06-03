<script setup lang="ts"></script>

<template>
  <main class="table-container">
    <table>
      <thead>
        <slot name="thead" />
      </thead>
      <tbody>
        <slot name="tbody" />
      </tbody>
    </table>
  </main>
</template>

<style lang="scss">
.table-container {
  background-color: var(--color-gray-1);
  display: flex;
  width: 100%;
  padding: 20px;
  align-items: flex-start;
  gap: 20px;
  justify-content: flex-start;
  flex: 1;
}

table {
  border-collapse: separate;
  border-radius: 10px;
  min-width: 240px;
  border-spacing: 0 10px;
  table-layout: auto; // или fixed, если хочешь равномерность

  font-size: 15px;
  color: var(--color-black);
  font-weight: 500;
}

thead {
  width: 100%;
  font-size: 15px;
  color: var(--color-black);
  font-weight: 500;
  white-space: nowrap;
  line-height: 1;

  tr {
    background-color: var(--color-gray-300);
    text-align: start;
    border: 1px solid var(--color-gray-400);

    th {
      padding: 10px;
    }

    /* Скругляем углы: первая и последняя ячейка */
    th:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    th:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  th:not(:first-child) {
    border-left: 1px solid var(--color-gray-400);
  }

  th > * {
    align-self: stretch;
    width: 100%;
    gap: 10px;
  }
}

tbody {
  margin-top: 10px;
  width: 100%;

  tr {
    border-radius: 20px;
    background-color: var(--color-white);
    padding: 10px;
    align-items: stretch;
    margin-top: 10px;

    td {
      border-left: none;

      * {
        margin: 10px;
        gap: 10px;
      }
    }

    td:first-child {
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;
    }

    td:last-child {
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
}

tr {
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  width: 100%;
  min-height: 60px;
  height: 60px;
  align-items: flex-start;
  justify-content: flex-start;
}

td {
  border-left: 1px solid var(--color-gray-100);
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}

@media (max-width: 991px) {
  thead {
    display: none;
  }
}

.is-warning > td {
  background-color: var(--color-warning);
  border: 1px solid var(--color-warning-border);
  border-left: none;
  border-right: none;
}

.is-error > td {
  background-color: var(--color-error);
  border: 1px solid var(--color-error-border);
  border-left: none;
  border-right: none;
}
</style>
