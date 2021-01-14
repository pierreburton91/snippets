import Vue from "vue";
import dayjs from "dayjs";
import "dayjs/locale/fr";

export default Vue.filter("date", (value, displayTime) => {
  if (!value) {
    return "";
  }
  const now = dayjs();
  let dayjsDate = dayjs(value);
  if (!dayjsDate.isValid()) {
    dayjsDate = dayjs(value.split("-").reverse());
  }
  if (displayTime) {
    return dayjsDate.locale("fr").format("DD MMM YYYY HH:mm");
  }
  if (now.isSame(dayjsDate, "day")) {
    return "Aujourd'hui";
  }
  if (
    now.isBefore(dayjsDate, "day") &&
    dayjsDate.isBefore(now.add(7, "day"), "day")
  ) {
    return dayjsDate.locale("fr").format("dddd");
  }
  return dayjsDate.locale("fr").format("DD MMM YYYY");
});
