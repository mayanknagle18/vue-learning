import "../scss/main.scss";

import { createApp } from 'vue'
import App from './components/App.vue'
import vuetify from './vuetify'
import '@mdi/font/css/materialdesignicons.css'

createApp(App)
  .use(vuetify)
  .mount('#app')