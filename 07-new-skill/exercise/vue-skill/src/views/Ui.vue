<script>
import { ref } from "vue";
export default {
  setup() {
    const showAlert = ref(false);
    return {
      showAlert,
    };
  },
};
</script>
<template>
  <div id="DeepSelectors">
    <w-app id="w-app-box" block="block">
      <w-button
        @click="showAlert = !showAlert"
        color="primary"
        outline="outline"
        >Hide alert</w-button
      >
      <w-transition-expand y="y">
        <w-alert v-if="showAlert" color="success">
          The alert is now visible.
        </w-alert>
      </w-transition-expand>
    </w-app>
  </div>
</template>

<style scoped>
#DeepSelectors .w-app {
  min-height: 100px;
}
</style>
