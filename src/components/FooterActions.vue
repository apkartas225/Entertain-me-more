<template>
  <div class="footer">
    <button class="save-button" @click="saveChanges">Save changes</button>
    <button
      :class="['unsubscrible', { disabled: state }]"
      @click="unsubscribeAll"
    >
      Unsubscribe from all of the above. It’s over
    </button>
  </div>
</template>

<script>
import store from "../store";

export default {
  computed: {
    state() {
      return store.state.data.every((el) => !el.subscribed);
    },
  },
  methods: {
    saveChanges() {
      this.$emit("openPopup");
    },
    unsubscribeAll() {
      this.$emit("openPopup", "unsubscribeAll");
      store.dispatch("actionSubscribe");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/Footer.scss";
</style>
