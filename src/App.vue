<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #f5f6f8;">
    <TheHeader class="header" />
    <TheSideBar />

    <q-page-container class="main-view">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
import TheSideBar from "./components/TheSideBar";
import TheHeader from "./components/TheHeader";
export default {
  name: "LayoutDefault",
  components: {
    TheSideBar,
    TheHeader
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.header {
  /*padding: 18px 36px;*/
  height: 60px;
  /*background-color: #ffffff;*/
}

.main-view {
  background-color: #f5f6f8;
  height: 92vh;
  /*margin: 0;*/
  /*padding: 0;*/
}
</style>
