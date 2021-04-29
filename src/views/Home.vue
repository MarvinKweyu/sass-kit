<template>
  <div class="row home">
    <div class="col-xs-12 sub-section-one">
      <TheTaskListContainer></TheTaskListContainer>
    </div>
    <div class="col-xs-12 sub-section-two">
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
  height: 90vh !important;
  margin: 10px 10px 36px 25px;
}
.sub-section {
  /*margin: 35px 0px 3px 3px;*/
  padding: 16px 0 14px;
  border-radius: 4px;
  box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);
}
.sub-section-two {
  width: 25vw !important;
  /*min-width: 450px !important;*/
}
.sub-section-one {
  margin-right: 10px;
  width: 52vw !important;
}

.menu-toggle-close {
  /* width: 60vw !important; sub-section-one */
  /* width: 30vw !important; sub-section tow */
}
</style>
