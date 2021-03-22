<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #f5f6f8;">
    <TheHeader class="header" />
    <TheSideBar class="side" />

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
* {
  font-family: "Poppins",serif;
}
.header {
  /*padding: 18px 36px;*/
  height: 60px;
  /*background-color: #ffffff;*/
}
.side {
  border: 2px solid red;
  box-shadow: 6px 0 18px 0 rgba(0, 0, 0, 0.06);
}
.main-view {
  background-color: #f5f6f8;
  height: 92vh;
  /*margin: 0;*/
  /*padding: 0;*/
}
</style>
