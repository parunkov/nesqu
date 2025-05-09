<script setup lang="ts">
</script>

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
    background-color: var(--color-gray-100);
    display: flex;
    width: 100%;
    padding: vw(20);
    align-items: flex-start;
    gap: vw(20);
    overflow: hidden;
    justify-content: flex-start;
    flex: 1;
    height: 100%;
}

table {
    border-radius: vw(10);
    min-width: vw(240);
    overflow: hidden;
  border-collapse: separate; // или collapse, если без gap
  border-spacing: 0 vw(10);
  table-layout: auto; // или fixed, если хочешь равномерность

  font-size: vw(15);
  color: var(--color-black);
  font-weight: 500;
}

thead {
    width: 100%;
    font-size: vw(15);
    color: var(--color-black);
    font-weight: 500;
    white-space: nowrap;
    line-height: 1;

  tr {

    background-color: var(--color-gray-300);
    text-align: start;
    border: vw(1) solid var(--color-gray-400);

    th {

      padding: vw(10);
    }

    /* Скругляем углы: первая и последняя ячейка */
    th:first-child {
      border-top-left-radius: vw(10);
      border-bottom-left-radius: vw(10);
    }

    th:last-child {
      border-top-right-radius: vw(10);
      border-bottom-right-radius: vw(10);
    }

  }

  th:not(:first-child) {
    border-left: vw(1) solid var(--color-gray-400);
  }

  th>* {
      align-self: stretch;
      width: 100%;
      gap: vw(10);
      overflow: hidden;
    }
}

tbody {
  margin-top: vw(10);
  width: 100%;

  tr {
    border-radius: vw(20);
    background-color: var(--color-white);
    padding: vw(10);
    align-items: stretch;
    margin-top: vw(10);

    td {

      background-color: var(--color-white);
      border-left: none;

      * {
        margin: vw(10);
        gap: vw(10);
        overflow: hidden;
      }
    }

     td:first-child {
      border-top-left-radius: vw(20);
      border-bottom-left-radius: vw(20);
    }

     td:last-child {
      border-top-right-radius: vw(20);
      border-bottom-right-radius: vw(20);
    }

  }
}

tr {
    border-radius: vw(10);
    width: 100%;
    align-items: flex-start;
    overflow: hidden;
    justify-content: flex-start;
}

td {
  background-color: var(--color-gray-300);
  border-left: vw(1) solid var(---color-gray-100);
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
}
</style>
