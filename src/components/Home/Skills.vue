<template>
  <div class="w-full flex flex-col gap-5">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light">
      Technology <span class="text-softGray">Stack</span>
    </h1>

    <div class="flex flex-wrap flex-row justify-center items-center gap-4 mt-4">
      <SkillSet
        website="https://vuejs.org/"
        icon="vue"
        title="Vue.js"
        data-aos="zoom-in"
        data-aos-delay="0"
      />
      <SkillSet
        website="https://inertiajs.com/"
        icon="inertia"
        title="Inertia.js"
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      <SkillSet
        website="https://tailwindcss.com/"
        icon="tailwind"
        title="Tailwind"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
      <SkillSet
        website="https://laravel.com/"
        icon="laravel"
        title="Laravel"
        data-aos="zoom-in"
        data-aos-delay="300"
      />
      <SkillSet
        website="https://getbootstrap.com/"
        icon="bootstrap"
        title="Bootstrap"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <SkillSet
        website="https://www.php.net/"
        icon="php"
        title="PHP"
        data-aos="zoom-in"
        data-aos-delay="500"
      />
      <SkillSet
        website="https://git-scm.com/"
        icon="git"
        title="Git"
        data-aos="zoom-in"
        data-aos-delay="600"
      />
      <SkillSet
        website="https://www.mysql.com/"
        icon="mysql"
        title="MySQL"
        data-aos="zoom-in"
        data-aos-delay="700"
      />
      <SkillSet
        website="https://nuxt.com/"
        icon="nuxt"
        title="Nuxt"
        data-aos="zoom-in"
        data-aos-delay="800"
      />
      <SkillSet
        website="https://cplusplus.com/"
        icon="cplus"
        title="C++"
        data-aos="zoom-in"
        data-aos-delay="900"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillSet from "./Partials/SkillSet.vue";
</script>
