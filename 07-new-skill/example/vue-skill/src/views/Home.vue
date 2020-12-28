<script>
import { onUnmounted, ref } from "vue";
export default {
  setup() {
    const time = ref(5);

    const timer = setInterval(() => {
      time.value--;
      if (time.value <= 0) {
        clearInterval(timer);
        console.log("clearInterval");
      }
    }, 1000);

    onUnmounted(() => {
      clearInterval(timer);
    });

    return { time };
  },
};
</script>
<template>
  <div class="home">
    <img src="../assets/logo.png" alt="" />
    <h1>{{ time }}</h1>
  </div>
</template>
