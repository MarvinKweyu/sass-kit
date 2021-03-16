<template>
  <q-card class="my-card">
    <q-card-section class="flex justify-between head-section q-mb-none">
      <div class="deal-title">Deals</div>
      <p class="show-monthly">
        <span>Show: </span> <span class="text-style-1">This week</span>
      </p>
    </q-card-section>

    <q-card-section>
      <div id="chart">
        <apexchart
          type="area"
          height="250"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Deals",
  data() {
    return {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        yaxis: {
          type: "int",
          categories: ["50", "100", "150", "200"]
        },
        tooltip: {
          // x: {
          //   format: "dd/MM/yy HH:mm"
          // }
          y: {}
        }
      }
    };
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
.deal-title {
  /* width: 200px;
  height: 23px;
  margin: 0 98px 15px 24px; */
  height: 23px;
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
.show-monthly {
  /* width: 87px; */
  height: 18px;
  flex-grow: 0;
  margin: 0 5px 0 0;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  text-align: left;
  color: #109cf1;
}

.show-monthly .text-style-1 {
  color: #6a707e;
}
.chart {
  height: 250px;
}
</style>
