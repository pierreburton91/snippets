import Vue from "vue";

export default Vue.filter("currency", function(value) {
  if (!value) return "0,00";
  const formatter = new Intl.NumberFormat(process.env.VUE_APP_DEFAULTLOCALE, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  let valueFloat;
  if (typeof value == "string") {
    valueFloat = parseFloat(value.replace(",", ".")).toFixed(2);
  } else {
    valueFloat = value;
  }
  return formatter.format(valueFloat);
});
