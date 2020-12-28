<script>
import SuspenseBar from "../components/Suspense.vue";
export default {
  components: {
    SuspenseBar,
  },
  setup() {
    return {};
  },
};
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SuspenseBar />
  </div>
</template>
