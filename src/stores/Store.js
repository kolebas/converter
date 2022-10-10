import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("Store", {

  state: () => ({
    data: [],
    terms: [],
    filterValue: "",
    defaultValute: "",
    valuteConverterLeft: "",
    valuteConverterRight: "",
    headers: [
      { title: "Дата", filtered: false },
      { title: "Название", filtered: true, filterFiled: "title" },
      { title: "Номинал", filtered: true, filterFiled: "nominal" },
      { title: "Стоймость", filtered: true, filterFiled: "value" },
      { title: "Динамика", filtered: true, filterFiled: "distance" },
    ],
    converterBefore: "",
    converterAfter: "",
  }),

  actions: {
    async getData() {
      try {
        const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
        this.data = Object.keys(response.data.Valute).map((key) => response.data.Valute[key]);
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    async getTerms() {
      try {
        const response = await axios.get("https://www.cbr-xml-daily.ru/latest.js");
        this.terms = Object.keys(response.data.rates).map((key) => Object.assign({ valute: key, value: response.data.rates[key] }));
      }
      catch (error) {
        alert(error)
        console.log(error)
      }
    },

    changeBaseValute() {
      const multiplier = this.terms.find(item => item.valute === this.defaultValute).value;

      this.data.map(item => (item.Value = item.Value * multiplier, item.Previous = item.Previous * multiplier))
    },

    convertValute() {
      const valueInRub = this.converterBefore * this.data.find(item => item.CharCode === this.valuteConverterLeft).Value;
      this.converterAfter = valueInRub * this.terms.find(item => item.valute === this.valuteConverterRight).value;
    },

    changeEndpointValute(){
      let left = this.valuteConverterLeft;
      let right = this.valuteConverterRight;
      this.valuteConverterRight = left;
      this.valuteConverterLeft = right;
      this.convertValute();
    }

  },

  getters: {
    filteredData: (state) => {
      if (state.filterValue) {
        return state.data.filter(item => (item.CharCode.toLowerCase().includes(state.filterValue.toLowerCase()) || item.Name.toLowerCase().includes(state.filterValue.toLowerCase())))
      } else {
        return state.data
      }
    },
  }

})