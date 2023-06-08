<template>
  <div class="card-element">
    <div class="card-element__top">
      <div class="card-element__top_image">
        <img :src="`${card.picture}`" />
      </div>
      <div class="card-element__top_toggle">
        <div class="card-element__top_toggle-label">
          {{ card.subscribed ? "Subscribed" : "Unsubscribed" }}
        </div>
        <toggle-button
          sync
          :value="card.subscribed"
          @change="onChangeEventHandler"
          :color="{
            checked: '#fff',
            unchecked: '#fff',
          }"
          :switch-color="{
            checked: '#58b486',
            unchecked: '#979797',
          }"
        />
      </div>
    </div>
    <div class="card-element__bottom">{{ card.title }}</div>
  </div>
</template>

<script>
import store from "../store";
import { ToggleButton } from "vue-js-toggle-button";

export default {
  components: { ToggleButton },

  props: {
    index: { type: Number, default: 0 },
    card: { required: true, type: Object },
  },

  methods: {
    onChangeEventHandler() {
      store.dispatch("actionSubscribe", this.index);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/Cards.scss";
</style>
