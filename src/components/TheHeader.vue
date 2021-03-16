<template>
  <q-header class="search-bar">
    <q-toolbar>
      <div class="row flex justify-between">
        <div>
          <q-btn
            flat
            dense
            round
            aria-label="Menu"
            icon="search"
            class="icon search"
          />
          <span class="search">
            Global search
          </span>
        </div>
        <div class="flex justify-end"><i class="far fa-bell icon"></i></div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: "TheHeader"
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
