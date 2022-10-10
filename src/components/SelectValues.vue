<template>
  <select
    @change="props.actionChange()"
    class="component__select"    
    v-model="storeValutes.defaultValute"
  >
    <option
      v-for="(item, index) in storeValutes.terms"
      :key="index"
      :value="item.valute"
    >
      {{ item.valute }}
    </option>
  </select>
</template>

<script setup>
import { useStore } from "@/stores/Store";

const storeValutes = useStore();

const props = defineProps({
  actionChange: { type: Function, default: () => false },
  value: { type: String },
});


</script>

<style>
.component__select {
  width: 5%;
  margin: 0 0 1% 0;
  border: solid 2px #eeeeee;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 18px;
}
</style>