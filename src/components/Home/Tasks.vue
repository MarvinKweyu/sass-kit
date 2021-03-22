<template>
  <q-card class="my-card">
    <q-card-section class="flex row justify-between head-section">
      <div class="task-title">Tasks</div>
      <p class="show-this-month">
        <span>Show: </span>
        <span class="time-filter"
          >This week <i class="q-ml-xm fas fa-caret-down time-filter"> </i
        ></span>
      </p>
    </q-card-section>

    <q-card-section>
      <vc-donut
        has-legend
        :legend-placement="ringLegendPosition"
        :sections="sections"
        :size="ringSize"
        unit="%"
        :auto-adjust-text-size="true"
        :start-angle="ringStartAngle"
        :thickness="ringThickness"
      >
        <span class="percentage"> {{ completedPercentage.value }}% </span>
      </vc-donut>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Tasks",
  data() {
    return {
      TaskStatus: [
        {
          name: "Active",
          itemClass: "active",
          percentage: ""
        },
        {
          name: "Completed",
          itemClass: "completed",
          percentage: ""
        },
        {
          name: "Ended",
          itemClass: "ended",
          percentage: ""
        }
      ],
      ringSize: 60,
      ringThickness: 7,
      ringStartAngle: 90,
      ringLegendPosition: "right",
      sections: [
        { label: "Active", value: 25, color: "#ffb946" },
        { label: "Ended", value: 15, color: "#f7685b" },
        { label: "Completed", value: 60, color: "#2ed47a" }
      ]
    };
  },
  computed: {
    completedPercentage() {
      // get the percentage of the completed tasks
      let res = Math.max.apply(
        Math,
        this.sections.map(function(item) {
          return item.value;
        })
      );
      this.sections.find(function(item) {
        return item.value === res;
      });

      return this.sections.find(item => item.label === "Completed");
    }
  }
};
</script>

<style scoped>
.my-card {
  height: 48%;
}
.head-section {
  /* margin: 15px 0 16px; */
  border-bottom: 1px solid #ebeff2;
}

.task-title {
  /*width: 200px;*/
  height: 23px;
  /*margin: 0 98px 15px 24px;*/
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

.show-this-month {
  /* width: 106px; */
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

.show-this-month .time-filter {
  color: #6a707e;
}
>>> .cdc-legend-item-color {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-grow: 0;
  margin: 6px 8px 6px 0;
}
.task-status {
  margin: 0 0 0 8px;
}
.task-status-name {
  color: #192a3e;
}
.percentage {
  width: 200px;
  height: 82px;
  font-size: 56px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #2ed47a;
}
</style>
