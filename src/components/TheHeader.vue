<template>
  <q-header class="search-bar">
    <div class="row flex justify-between">
      <div class="q-mt-none q-ml-lg row">
        <q-input
          borderless
          v-model="searchTerm"
          input-class="text-left"
          class="q-ml-md search"
          :placeholder="searchPlaceHolder"
        >
          <template v-slot:prepend>
            <q-icon
              name="search"
              class="icon search"
              style="font-size: 18px;"
            />
          </template>
        </q-input>
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
  },
  computed: {
    searchPlaceHolder() {
      return this.$store.getters.searchPlaceHolder;
    }
  },
  watch: {
    searchTerm: function(newVal) {
      this.$store.commit("setSearchTerm", newVal);
    }
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
}
.icon {
  color: #90a0b7;
}
</style>
