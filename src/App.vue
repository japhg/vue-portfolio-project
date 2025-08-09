<script setup lang="ts">
import { RouterView } from "vue-router";
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { onMounted, onUnmounted, ref } from "vue";

AOS.init();

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="bg-primary min-h-screen relative overflow-hidden">
    <div
      class="absolute top-0 -left-4 w-72 h-72 bg-accent rounded-full mix-blend-lighten filter blur-xl opacity-20 animate-blob"
    ></div>
    <div
      class="absolute top-0 -right-4 w-72 h-72 bg-[#A78BFA] rounded-full mix-blend-lighten filter blur-xl opacity-20 animate-blob animation-delay-2000"
    ></div>
    <div
      class="absolute -bottom-8 left-20 w-72 h-72 bg-accent rounded-full mix-blend-lighten filter blur-xl opacity-20 animate-blob animation-delay-4000"
    ></div>

    <main class="relative z-10">
      <header
        class="w-full fixed top-0 left-0 right-0 transition-all duration-500 ease-in-out z-50"
        :class="
          isScrolled
            ? 'bg-primary/80 backdrop-blur-sm shadow-lg shadow-secondary/5'
            : 'bg-transparent'
        "
      >
        <Nav />
      </header>

      <div
        class="flex flex-col items-center gap-5 justify-center pt-24 md:pt-28 selection:bg-[#FF2D20] selection:text-white"
      >
        <RouterView />
      </div>

      <footer class="mt-20 md:mt-32">
        <div class="w-full flex flex-col justify-center items-center">
          <Footer />
        </div>
      </footer>
    </main>
  </div>
</template>

<style>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
