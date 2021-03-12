<template>
  <div class="q-mt-auto">
    <div class="flex row justify-between">
      <p>Company: All</p>
      <!--      <q-btn color="#109cf1" label="Add contact" />-->
      <div class="q-pa-md q-gutter-sm">
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
}
.Add-contact {
  width: 132px;
  height: 20px;
  font-family: Poppins;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.13px;
  text-align: center;
  color: #ffffff;
}
</style>
