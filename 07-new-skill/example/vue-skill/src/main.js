import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { ElButton, ElSelect } from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

const app = createApp(App);

app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);

app
  .use(store)
  .use(router)
  .mount("#app");
