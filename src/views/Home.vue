<template>
  <div class="row home">
    <div class="col-md-8 col-xs-12 sub-section-one">
      <TheTaskListContainer></TheTaskListContainer>
    </div>
    <div class="col-md-3 col-xs-12 sub-section-two">
      <Deals class="q-mb-md deals"></Deals>
      <Tasks class="tasks"></Tasks>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TheTaskListContainer from "@/components/Home/TheTaskListContainer";
import Deals from "../components/Home/Deals";
import Tasks from "../components/Home/Tasks";

export default {
  name: "Home",
  components: {
    TheTaskListContainer,
    Deals,
    Tasks
  },
  created() {
    this.$store.commit("setSearchPlaceHolder", "Global search");
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  /* width: 100%; */
  margin: 36px 38px 36px 36px;
}
.sub-section {
  /*margin: 35px 0px 3px 3px;*/
  padding: 16px 0 14px;
  border-radius: 4px;
  box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
}
.sub-section-two {
  /*min-width: 450px !important;*/
}
.sub-section-one {
  margin-right: 30px;
}
</style>
