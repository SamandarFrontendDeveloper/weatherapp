<template>
  <header class="header">
    <nav class="header__nav">
        <a href="" class="header__logo">
            <img src="@/assets/images/logo.svg" alt="">
            <span>vue weather</span>
        </a>
        <div class="header__search">
            <img src="@/assets/images/drop.svg" alt="">
            <input 
            @keydown.enter="getWeather(query)"
            placeholder="Выбрать город..."
            type="text" 
            class="header__input"
            v-model="query"
            >
        </div>
    </nav>
  </header>
</template>

<script>

import {mapActions} from 'vuex'

export default {
    data(){
        return {
            query: ''
        }
    },
    methods: {
        // setWeather(){
        //     this.$store.dispatch('getWeather', this.query);
        //     this.query = '';
        // }
        ...mapActions(['getWeather'])
    }
}
</script>

<style>

</style>