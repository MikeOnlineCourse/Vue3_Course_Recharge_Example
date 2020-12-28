<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const isOpen = computed(() => {
      return store.getters.isMenuOpen;
    });

    return { isOpen };
  },
};
</script>
<template>
  <div id="menu" :class="{ open: isOpen }"></div>
</template>

<style scoped>
#menu {
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: rgb(255, 208, 0);
  top: 0;
  right: -300px;
  transition: right 0.3s;
}
#menu.open {
  right: 0;
}
</style>
