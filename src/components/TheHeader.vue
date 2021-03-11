<template>
  <q-header class="search-bar">
    <q-toolbar>
      <q-btn flat dense round aria-label="Menu" icon="search" />

      <q-toolbar-title>
       The search bar
      </q-toolbar-title>

      <div><i class="far fa-bell"></i></div>
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
  /*background-color: #ffffff;*/
  border-bottom: #ebeff2;
}
</style>
