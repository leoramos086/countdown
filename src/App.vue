<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import BoxDate from "./components/BoxDate.vue";
import { computed, ref, onMounted, onUnmounted } from "vue";
import getUrlParams from "./helpers/getUrlParams";

const params = getUrlParams();

const message = params.msg ? decodeURIComponent(params.msg) : "Feliz 2023!!!!";

const paramsDate = params.date ? params.date : 1672542000000;
//1656745320000 aniversário Helena
//https://source.unsplash.com/random/1920x1080/?mount
const dateExpect = new Date(Number(paramsDate));

const dateNow = ref<Date>(new Date());

const update = () => {
  dateNow.value = new Date();
};

const date = computed(() => {
  const SECONDS_IN_MM = 1000;
  const MINUTES_IN_MM = SECONDS_IN_MM * 60;
  const HOUR_IN_MM = MINUTES_IN_MM * 60;
  const DAY_IN_MM = HOUR_IN_MM * 24;

  const diff = dateExpect.getTime() - dateNow.value.getTime();
  const diffDays = Math.floor(diff / DAY_IN_MM);
  const diffHrs = Math.floor((diff % DAY_IN_MM) / HOUR_IN_MM);
  const diffMins = Math.floor(
    ((diff % DAY_IN_MM) % HOUR_IN_MM) / MINUTES_IN_MM
  );
  const diffSecs = Math.floor(
    (((diff % DAY_IN_MM) % HOUR_IN_MM) % MINUTES_IN_MM) / SECONDS_IN_MM
  );

  return {
    day: diffDays,
    hour: diffHrs,
    minutes: diffMins,
    seconds: diffSecs,
  };
});

let handle: ReturnType<typeof setInterval>;
onMounted(() => {
  handle = setInterval(update, 100);

  const params = new URLSearchParams(window.location.search);
  // const myParam = urlParams.get('msg')
});

onUnmounted(() => {
  clearInterval(handle);
});
</script>

<template>
  <div class="container container_title">
    <p>{{ message }}</p>
  </div>
  <div class="container">
    <BoxDate msg="Dias" :value="date.day"></BoxDate>
    <BoxDate msg="Horas" :value="date.hour"></BoxDate>
    <BoxDate msg="Minutos" :value="date.minutes"></BoxDate>
    <BoxDate msg="Segundos" :value="date.seconds"></BoxDate>
  </div>
</template>

<style>
@import "./../node_modules/normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Bitter:wght@400;900&display=swap");

p {
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  height: 100vh;
  padding: 10px;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgb(41, 41, 41);
  background: #0f2027; 
  background: -webkit-linear-gradient(
    to left,
    #2c5364,
    #203a43,
    #0f2027
  );
  background: linear-gradient(
    to left,
    #2c5364,
    #203a43,
    #0f2027
  );
}

.container {
  width: 1080px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.container_title {
  font-family: "Bitter", serif;
  padding-bottom: 0.75em;
  color: white;
  text-align: center;
  font-size: 3.5em;
}
</style>
