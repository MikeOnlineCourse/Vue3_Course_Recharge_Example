<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  setup() {
    const photo = ref({});

    onMounted(() => {
      axios
        .get("https://vue-lessons-api.herokuapp.com/photo/list")
        .then((res) => {
          photo.value = res.data;
          console.log(photo);
        });
    });

    return { photo: photo };
  },
};
</script>
<template>
  <img v-for="item in photo" :src="item.url" :key="item.url" />
</template>
<style></style>
