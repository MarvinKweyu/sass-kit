<template>
  <q-card class="my-card">
    <q-card-section class="flex justify-between head-section q-mb-none">
      <div class="deal-title">Deals</div>
      <p class="show-monthly">
        <span>Show: </span> <span class="text-style-1">This week</span>
      </p>
    </q-card-section>

    <q-card-section>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
      cupiditate error esse iusto modi nobis odit praesentium qui, quod ratione,
      sapiente unde. Aspernatur culpa dolor facilis iste magni sequi?
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: "Deals"
};
</script>

<style scoped>
.my-card {
  height: 45%;
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
</style>
