<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  msg: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const formattedPropsValue = computed(() => {
  if (props.value < 10) {
    return ("0" + props.value).slice(-2);
  }
  return props.value;
});
</script>

<template>
  <div class="box-date">
    <p class="date__value">
      <Transition name="slide-fade" mode="out-in">
        <span :key="formattedPropsValue">{{ formattedPropsValue }}</span>
      </Transition>
    </p>
    <p class="date__message">{{ props.msg }}</p>
  </div>
</template>

<style lang="scss">
$color: white;

.box-date {
  font-size: 3rem;
  padding: 0.25em;
  text-align: center;
  font-family: "Bitter", serif;
  font-weight: 900;
}

.box-date p {
  margin: 0;
}

.date__value {
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 135px;
  width: 180px;
  font-size: 1.8em;
  background-color: $color;
}

.date__message {
  padding-top: 0.5em;
  font-size: 0.5em;
  font-weight: 400;
  color: $color;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

$translate: 80px;

.slide-fade-enter-from {
  transform: translateY(-($translate));
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY($translate);
  opacity: 0;
}
</style>
