import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import MotionResolver from 'motion-v/resolver'
import { Analytics } from "@vercel/analytics/next"

createApp(App)
    .use(router)
    .use(PrimeVue, {
        theme: {
            preset: Aura
        }
    })
    .use(MotionResolver)
    .use(Analytics)
    .mount("#app");
