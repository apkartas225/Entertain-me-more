<template>
  <div id="app">
    <div class="internal">
      <SideBar />
      <MainDesk />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import MainDesk from "./components/MainDesk.vue";

export default {
  name: "App",
  components: {
    SideBar,
    MainDesk,
  },
};
</script>

<style lang="scss">
@import "./assets/styles/App.scss";
</style>
