<script>
import axios from "axios";
export default {
  async setup() {
    const photo = await axios.get(
      "https://vue-lessons-api.herokuapp.com/photo/list"
    );

    return { photo: photo.data };
  },
};
</script>
<template>
  <img v-for="item in photo" :src="item.url" :key="item.url" />
</template>
<style></style>
