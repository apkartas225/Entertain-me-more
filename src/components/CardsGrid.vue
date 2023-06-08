<template>
    <div class="cards-grid">
        <div v-for="(card, i) in subscribes" :key="i">
            <CardElement :card="card" :index="i" />
        </div>
    </div>
</template>

<script>
import store from "../store/";

import CardElement from "./CardElement.vue";
export default {
   
    components: { CardElement },
    
    name: "Cards-grid",

    computed: {
        subscribes() {
            return store.state.data;
        },
    },
};
</script>

<style>
@import "../assets/styles/Cards.scss";
</style>
