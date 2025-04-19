<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
</script>

<template>
  <div class="bg-primary w-full h-screen font-sans">
    <Nav class="fixed -top-5 left-0 w-full z-50 bg-inherit py-4" />

    <div
      class="flex flex-col items-center gap-5 justify-center selection:bg-[#FF2D20] selection:text-white"
    >
      <RouterView />
    </div>

    <footer class="mt-10">
      <div class="w-full flex flex-col justify-center items-center">
        <Footer />
      </div>
    </footer>
  </div>
</template>
