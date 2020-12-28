<script>
import { computed, onErrorCaptured, ref } from "vue";
import { useStore } from "vuex";
import MenuBar from "./components/MenuBar.vue";
export default {
  components: {
    MenuBar,
  },
  setup() {
    const store = useStore();

    const isMenuStatus = computed(() => store.getters.isMenuOpen);

    const handMenuOpen = () => {
      // isMenuStatus.value = !isMenuStatus.value;
    };

    return { handMenuOpen, isMenuStatus };
  },
};
</script>

<template>
  <div id="nav">
    <a href="javascript:;" @click="handMenuOpen">
      {{ !isMenuStatus ? "開啟選單" : "關閉選單" }}
    </a>
    | <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/ui">UI</router-link>
    <MenuBar />
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
