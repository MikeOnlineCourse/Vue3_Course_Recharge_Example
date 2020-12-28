<script>
import PhotoBox from "./PhotoBox.vue";
export default {
  components: {
    PhotoBox,
  },
};
</script>
<template>
  <div>
    <Suspense>
      <template #default>
        <PhotoBox />
      </template>
      <template #fallback>
        <h1>Loading...</h1>
      </template>
    </Suspense>
  </div>
</template>

<style></style>
