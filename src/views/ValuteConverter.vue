<template >
  <h1>Конвертер валют</h1>
  <form  @submit.prevent="storeValutes.convertValute()">
    <div class="converter">
      <input
        class="component__input converter__input-custom"
        type="number"
        required
        v-model="storeValutes.converterBefore"
      /><select
        class="component__select"
        v-model="storeValutes.valuteConverterLeft"
      >
        <option
          v-for="(item, index) in storeValutes.terms"
          :key="index"
          :value="item.valute"
          required
        >
          {{ item.valute }}
        </option>
      </select>
      <button
        @click="storeValutes.changeEndpointValute()"
        class="converter__button"
      >
        >-->
      </button>
      <input
        class="component__input converter__input-custom"
        type="number"
        v-model="storeValutes.converterAfter"
        disabled
      /><select
        class="component__select"
        v-model="storeValutes.valuteConverterRight"
      >
        <option
          v-for="(item, index) in storeValutes.terms"
          :key="index"
          :value="item.valute"
          required
        >
          {{ item.valute }}
        </option>
      </select>
    </div>    
    <button @click="submit" class="converter__button">Конвертировать</button>
  </form>
</template>

<script setup>
import { useStore } from "@/stores/Store";

const storeValutes = useStore();
</script>

<style>
.converter {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.converter__input-custom {
  width: 150px;
}
.converter__button {
  width: 150px;
  border-radius: 5px;
  margin-bottom: 1%;
  border: none;
  height: 44px;
}
.converter__button:hover {
  cursor: pointer;
  border: solid 1px blue;
}
</style>