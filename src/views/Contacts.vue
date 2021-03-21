<template>
  <div class="q-mt-auto">
    <div class="flex row justify-between q-pa-md ">
      <p class="company-all q-mt-md row">
        <span>Company: </span><span class="text-style-1">All</span>
        <span><i class="q-ml-sm fas fa-caret-down "> </i></span>
      </p>
      <div class="q-gutter-sm">
        <q-btn label="Add contact" class="add-contact" />
      </div>
    </div>
    <TableView />
  </div>
</template>

<script>
import TableView from "../components/Contacts/TableView";
export default {
  name: "Contacts",
  components: {
    TableView
  },
  created() {
    this.$store.commit("setSearchPlaceHolder", "Search for a contact");
  }
};
</script>

<style scoped>
.add-contact {
  width: 160px;
  height: 42px;
  /*padding: 11px 14px;*/
  border-radius: 4px;
  box-shadow: 0 4px 10px 0 rgba(16, 156, 241, 0.24);
  background-color: #109cf1;
  color: #ffffff;
  text-transform: initial;
}
.Add-contact {
  width: 132px;
  height: 20px;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: center;
  color: #ffffff;
}
.company-all {
  height: 18px;
  flex-grow: 0;
  margin: 0 5px 0 0;
  font-family: Poppins;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.12px;
  text-align: left;
  color: #6a707e;
}

.company-all .text-style-1 {
  color: #109cf1;
}
</style>
