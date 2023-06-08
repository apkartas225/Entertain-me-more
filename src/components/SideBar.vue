<template>
  <div class="side-bar">
    <div class="side-bar__logo"><img src="../../public/7.png" alt="" /></div>
    <div class="side-bar__fun-words">
      How much fun<br />
      do you want in your life?
    </div>
    <div class="side-bar__range">
      <div class="side-bar__range-mail">harry.simon@yahoo.com</div>
      <div class="side-bar__range-fun">FUN YOU GET</div>
      <div class="side-bar__range-info">
        <ProgressBar :min="0" :now="procent" :max="100" />
        <span class="procent">{{ Math.round(procent) }}%</span>
      </div>

      <div class="side-bar__subscribe">
        <span class="contacts">Subscribe </span> to all our fun sites<br />
        to upgrade your fun progress
      </div>
    </div>
    <div class="side-bar__policy">
      <div>
        EntertainMeMore 11807<br />
        Westheimer 550 PMB617<br />
        Houston, TX 77077<br />
        <div class="contacts">email@entertainmemore.com</div>
        <div class="contacts">Privacy Policy</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";

import ProgressBar from "./ProgressBar.vue";
export default {
  components: { ProgressBar },

  computed: {
    procent() {
      return store.getters.getCurrentProcent;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/SideBar.scss";
</style>
