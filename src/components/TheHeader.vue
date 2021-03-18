<template>
  <q-header class="search-bar">
    <div class="row flex justify-between">
      <div class="q-mt-md q-ml-lg row">
        <q-btn
          flat
          dense
          aria-label="Menu"
          icon="search"
          class="icon search q-mb-0"
        />
        <!--        <q-icon name="search" class="icon search q-mb-0" />-->
        <q-input
          borderless
          v-model="searchTerm"
          class="search q-mb-xl"
          placeholder="Global search"
        />
      </div>
      <div class="q-pa-md"><i class="far fa-bell icon"></i></div>
    </div>
  </q-header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      searchTerm: null
    };
  }
};
</script>

<style scoped>
.search-bar {
  background-color: #ffffff;
  border-bottom: #ebeff2;
}

.search {
  /*width: 895px;*/
  height: 18px;
  flex-grow: 0;
  /*margin: 1px 0 1px 12px;*/
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  text-align: left;
  color: #90a0b7;
  /*color: red;*/
}
.icon {
  color: #90a0b7;
}
</style>
