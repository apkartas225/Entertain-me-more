<template>
  <div class="main-desk">
    <div class="main-desk__header">
      <div class="notice">Ok, let’s change your preferences</div>
      <div class="notice-sub">
        To unsubscribe, please uncheck the appropriate box(es).
      </div>
    </div>
    <CardsGrid />
    <FooterActions @openPopup="calcDifference" />
    <PopUp
      :isOpen="isOpenPopUp"
      :difference="difference"
      @closePopup="isOpenPopUp = false"
    />
  </div>
</template>

<script>
import store from "../store";

import CardsGrid from "./CardsGrid.vue";
import PopUp from "./PopUp.vue";

import FooterActions from "./FooterActions.vue";

export default {
  name: "Main-desk",
  components: { CardsGrid, FooterActions, PopUp },
  data() {
    return {
      isOpenPopUp: false,
      difference: 0,
      initialData: [
        {
          site: "trainyrbrain",
          subscribed: true,
          picture: "2.png",
          title: "True/False Quiz. Keep your brain fit",
        },
        {
          site: "ynquiz",
          subscribed: true,
          picture: "3.png",
          title:
            "Fun photo Quiz. Match words and names to pictures of objects and people",
        },
        {
          site: "finditquiz",
          subscribed: true,
          picture: "4.png",
          title: "Celebrity Photo to Quiz. Guess the star by the photo",
        },
        {
          site: "moviequizonline",
          subscribed: true,
          picture: "5.png",
          title: "Easy yes/no Quiz. Distinguish facts from fiction",
        },
        {
          site: "findsuperstar",
          subscribed: true,
          picture: "6.png",
          title: "Movie photo Quiz. Guess the film by a still",
        },
        {
          site: "whatcountry",
          subscribed: true,
          picture: "1.png",
          title:
            "Geography quiz. Guess the country by the photo (fact/description)",
        },
      ],
    };
  },
  methods: {
    calcDifference(unsubscribeAll = null) {
      if (unsubscribeAll) {
        this.difference = -100;
        this.isOpenPopUp = true;
        this.initialData = this.initialData.map((el) => {
          el.subscribed = false;
          return el;
        });
        return;
      }
      const { diff, initialData } = store.getters.getDifference(
        this.initialData
      );
      this.difference = diff;
      this.initialData = initialData;

      this.isOpenPopUp = true;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/MainDesk.scss";
</style>
