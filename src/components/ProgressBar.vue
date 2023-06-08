<template>
  <div class="progress-box">
    <div
      class="progress-bar progress-bar-animated"
      :aria-valuenow="now"
      :aria-valuemin="min"
      :aria-valuemax="max"
      :style="style"
    />
  </div>
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
      required: true,
    },
    now: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },

  computed: {
    percent() {
      const range = this.max - this.min;
      const pos = this.now - this.min;
      return `${Math.round(100 * (pos / range))}%`;
    },

    style() {
      return {
        width: this.percent,
        "background-color": "#f2a723",
      };
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/SideBar.scss";
</style>
