import { defineNuxtPlugin } from "#app"
import VueSmoothScroll from "vue3-smooth-scroll"

export default defineNuxtPlugin((nuxtApp) => {
    const config = {
      offset: -120,
    }
    nuxtApp.vueApp.use(VueSmoothScroll,config)
})
