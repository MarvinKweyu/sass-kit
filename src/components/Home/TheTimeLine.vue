<template>
  <div>
    <p class="week-day" :class="tomorrowClass">{{ day.weekDayName }}</p>
    <span class="week-date" :class="currentDateSelect">{{ day.weekDate }}</span>
  </div>
</template>

<script>
export default {
  name: "TheTimeLine",
  props: {
    day: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectDate: 23,
      nextWeekDate: {
        weekDayName: "Mon",
        weekDate: 24
      }
    };
  },
  computed: {
    tomorrowClass() {
      return {
        monday: this.day.weekDayName === this.nextWeekDate.weekDayName
      };
    },
    currentDateSelect() {
      return {
        sunday: this.day.weekDate === this.selectDate,
        monday: this.day.weekDayName === this.nextWeekDate.weekDayName
      };
    }
  }
};
</script>

<style scoped>
.week-day {
  width: 32px;
  height: 20px;
  /* margin: 46px 60px 5px 24px; */
  opacity: 0.5;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: center;
  color: #334d6e;
}
.week-date {
  width: 32px;
  height: 18px;
  margin: 8px;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  text-align: center;
  color: #4c5862;
}
.monday {
  color: #109cf1;
}

.sunday {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  /*margin: 5px 64px 24px 28px;*/
  background-color: #109cf1;
  color: #ffffff;
}
</style>
