<template>
  <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="side-bar">
    <p>this is the side nav</p>
    <!--      <q-list>-->
    <!--        <q-item-label header>Essential Links</q-item-label>-->
    <!--        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">-->
    <!--          <q-item-section avatar>-->
    <!--            <q-icon name="school" />-->
    <!--          </q-item-section>-->
    <!--          <q-item-section>-->
    <!--            <q-item-label>Docs</q-item-label>-->
    <!--            <q-item-label caption>quasar.dev</q-item-label>-->
    <!--          </q-item-section>-->
    <!--        </q-item>-->
    <!--        <q-item-->
    <!--          clickable-->
    <!--          tag="a"-->
    <!--          target="_blank"-->
    <!--          href="https://github.com/quasarframework/"-->
    <!--        >-->
    <!--          <q-item-section avatar>-->
    <!--            <q-icon name="code" />-->
    <!--          </q-item-section>-->
    <!--          <q-item-section>-->
    <!--            <q-item-label>Github</q-item-label>-->
    <!--            <q-item-label caption>github.com/quasarframework</q-item-label>-->
    <!--          </q-item-section>-->
    <!--        </q-item>-->
    <!--        <q-item-->
    <!--          clickable-->
    <!--          tag="a"-->
    <!--          target="_blank"-->
    <!--          href="https://chat.quasar.dev"-->
    <!--        >-->
    <!--          <q-item-section avatar>-->
    <!--            <q-icon name="chat" />-->
    <!--          </q-item-section>-->
    <!--          <q-item-section>-->
    <!--            <q-item-label>Discord Chat Channel</q-item-label>-->
    <!--            <q-item-label caption>chat.quasar.dev</q-item-label>-->
    <!--          </q-item-section>-->
    <!--        </q-item>-->
    <!--        <q-item-->
    <!--          clickable-->
    <!--          tag="a"-->
    <!--          target="_blank"-->
    <!--          href="https://forum.quasar.dev"-->
    <!--        >-->
    <!--          <q-item-section avatar>-->
    <!--            <q-icon name="forum" />-->
    <!--          </q-item-section>-->
    <!--          <q-item-section>-->
    <!--            <q-item-label>Forum</q-item-label>-->
    <!--            <q-item-label caption>forum.quasar.dev</q-item-label>-->
    <!--          </q-item-section>-->
    <!--        </q-item>-->
    <!--        <q-item-->
    <!--          clickable-->
    <!--          tag="a"-->
    <!--          target="_blank"-->
    <!--          href="https://twitter.com/quasarframework"-->
    <!--        >-->
    <!--          <q-item-section avatar>-->
    <!--            <q-icon name="rss_feed" />-->
    <!--          </q-item-section>-->
    <!--          <q-item-section>-->
    <!--            <q-item-label>Twitter</q-item-label>-->
    <!--            <q-item-label caption>@quasarframework</q-item-label>-->
    <!--          </q-item-section>-->
    <!--        </q-item>-->
    <!--      </q-list>-->
    <div @click="drawStatus()" class="toggle-btn">
      <span class="subtract"></span>
      <span class="toggle-sidebar"> Toggle sidebar</span>
    </div>
  </q-drawer>
</template>

<script>
export default {
  name: "TheSideBar",
  data() {
    return {
      leftDrawerOpen: false,
      miniMode: false
    };
  },
  methods: {
    drawStatus() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
      // this.$emit("toggle-drawer");
    }
  }
};
</script>

<style scoped>
.side-bar {
  /*margin: 60px 0 60px 60px;*/
  /*padding: 17px 0 22px;*/
  box-shadow: 6px 0 18px 0 rgba(0, 0, 0, 0.06);
  height: 100%;
}
.toggle-sidebar {
  width: 146px;
  height: 17px;
  margin: 0 0 0 14px;
  /*font-family: Poppins;*/
  font-size: 11px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.11px;
  text-align: left;
  color: #90a0b7;
}
.subtract {
  width: 14px;
  height: 14px;
  margin: 1px 14px 2px 0;
  padding: 2px 8px 2px 4px;
  background-color: #c2cfe0;
}
.toggle-btn {
  cursor: pointer;
  bottom: 3%;
}
</style>
