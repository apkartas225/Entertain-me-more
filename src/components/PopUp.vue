<template>
  <div v-if="isOpen" class="popup">
    <div class="popup__internal">
      <div class="popup__box">
        <div>
          <span class="logo">Hurrah! </span> <br />
          <span class="subscription"
            >Your subscription preferences have been succesfully saved
          </span>
        </div>
        <div>
          <span class="profit" :class="difference > 0 ? 'add-color' : ''"
            >{{ Math.round(difference) }}% </span
          ><br />
          <span class="fun">{{
            difference ? "more fun added" : "fun lost :("
          }}</span>
        </div>
        <button @click="$emit('closePopup')" class="popup__box-button">
          Ok, great!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    difference: {
      type: Number,
    },
    isOpen: {
      type: Boolean,
    },
  },
  //   data() {
  //     return {};
  //   },
};
</script>

<style lang="scss">
@import "../assets/styles/PopUp.scss";
</style>
