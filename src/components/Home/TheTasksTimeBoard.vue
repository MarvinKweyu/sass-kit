<template>
  <div>
    <div class="flex row justify-between">
      <p class="counter-display">
        {{ taskAnalysis.tasksCompleted }} tasks completed out of
        {{ taskAnalysis.taskTotal }}
      </p>
      <p class="week-counter">
        <span class="text-style-1">Show: </span>
        <span
          >This week <i class="q-ml-xm fas fa-caret-down text-style-1"></i
        ></span>
      </p>
    </div>
    <div class="q-mb-sm">
      <q-linear-progress
        :value="progressIndicator"
        color="green"
        class="q-mt-sm progress"
      />
    </div>
    <div class="q-mb-none">
      <p class="current-date">{{ currentDate }}</p>
    </div>

    <div class="flex row justify-between">
      <div v-for="day in weekDays" :key="day.weekDayName">
        <div>
          <p class="week-day">{{ day.weekDayName }}</p>
          <span class="week-date" :class="sundayWeekDate">{{
            day.weekDate
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTasksTimeBoard",
  props: {
    taskAnalysis: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      progress: 0.8,
      currentDate: "23 December, Sunday",
      weekDays: [
        {
          weekDayName: "Sun",
          weekDate: "23"
        },
        {
          weekDayName: "Mon",
          weekDate: "24"
        },
        {
          weekDayName: "Tue",
          weekDate: "25"
        },
        {
          weekDayName: "Wed",
          weekDate: "26"
        },
        {
          weekDayName: "Thur",
          weekDate: "27"
        },
        {
          weekDayName: "Fri",
          weekDate: "28"
        },
        {
          weekDayName: "Sat",
          weekDate: "29"
        }
      ]
    };
  },
  computed: {
    progressIndicator() {
      return this.taskAnalysis.tasksCompleted / this.taskAnalysis.taskTotal;
    },
    sundayWeekDate() {
      return {
        sunday: this.weekDays.day === "Sun"
      };
    }
  }
};
</script>

<style scoped>
.current-date {
  width: 400px;
  height: 23px;
  /* margin: 20px 60px 46px 24px; */
  margin: 20px;
  padding: 0 0 1px;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.15px;
  text-align: left;
  color: #192a3e;
}

.blue {
  color: #109cf1;
}
.counter-display {
  width: 354px;
  height: 20px;
  margin: 0 14px 16px 24px;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: left;
  color: #334d6e;
}
.week-counter {
  /* width: 97px; */
  height: 18px;
  flex-grow: 0;
  margin: 0 6px 0 0;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  text-align: left;
  color: #109cf1;
}

.week-counter .text-style-1 {
  color: #6a707e;
}
.progress {
  /* width: 470px; */
  height: 4px;
  border-radius: 3px;
  /*background-color: #2ed47a;*/
}
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
.sunday {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 5px 64px 24px 28px;
  background-color: #109cf1;
}
</style>
