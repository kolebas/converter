<template>
  <h1>Список валют</h1>
  <FilterData />
  <div class="table">
    <div class="table__header">
      <div
        class="table__header-item"
        v-for="(item, index) in storeValutes.headers"
        :key="index"
      >
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div
      class="table__rows"
      v-for="(item, index) in storeValutes.filteredData"
      :key="index"
    >
      <p class="table__row-item">{{ item.CharCode }}</p>
      <p class="table__row-item">{{ item.Name }}</p>
      <p class="table__row-item">{{ item.Nominal }}</p>
      <p class="table__row-item">{{ item.Value }}</p>
      <p
        class="table__row-item"
        :class="[
          item.Value - item.Previous > 0
            ? `table__row-item_green`
            : 'table__row-item_red',
        ]"
      >
        {{ (item.Value - item.Previous).toFixed(3) }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "@/stores/Store";
import FilterData from "@/components/FilterData.vue";

const storeValutes = useStore();

</script>

<style>
.table {
  display: inline-block;
  border: solid 1px #eceff1;
  border-radius: 5px;
  width: 1280px;
}

.table__header {
  display: flex;
  justify-content: center;
  background-color: #eceff1;
  gap: 5%;
  border-bottom: solid 2px #eeeeee;
  font-weight: 600;
}

.table__header-item {
  width: 25%;
}

.table__rows {
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  gap: 5%;
  border-bottom: solid 1px #eeeeee;
}

.table__rows:last-child {
  border-bottom: none;
}

.table__rows:nth-child(2n) {
  background-color: #ffffff;
}

.table__row-item_green {
  color: green;
}

.table__row-item_red {
  color: red;
}

.table__rows:hover {
  border: solid 1px #b3e5fc;
  cursor: pointer;
}

.table__row-item {
  width: 25%;
}
</style>