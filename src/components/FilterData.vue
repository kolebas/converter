<template>
  <div class="filter">
    <input
      type="text"
      class="filter__input"
      placeholder="Введите название валюты "
      @change="storeValutes.filteringData()"
      v-model="storeValutes.filterValue"
    />
    <SelectValues
      :actionChange="actionChange"
    />
  </div>
</template>

<script setup>
import SelectValues from "@/components/SelectValues.vue";
import { useStore } from "@/stores/Store";

const storeValutes = useStore();

const actionChange = storeValutes.changeBaseValute;
</script>

<style>
.filter {
  display: flex;
  justify-content: space-around;
}

.filter__input {
  width: 20%;
  margin: 0 0 1% 0;
  border: solid 2px #eeeeee;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 18px;
}
</style>