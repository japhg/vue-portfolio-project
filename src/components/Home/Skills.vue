<template>
  <div class="w-full max-w-5xl flex flex-col gap-5">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light text-center">
      Technology <span class="text-accent">Stack</span>
    </h1>
    <div
      class="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-center items-center gap-5"
    >
      <SkillSet
        v-for="(skill, index) in skills"
        :key="index"
        :website="skill.website"
        :icon="skill.icon"
        :title="skill.title"
        data-aos="zoom-in"
        :data-aos-delay="index * 100"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SkillSet from "./Partials/SkillSet.vue";
import VueIcon from "@/components/icons/VueIcon.vue";
import InertiajsIcon from "@/components/icons/InertiajsIcon.vue";
import TailwindIcon from "@/components/icons/TailwindIcon.vue";
import LaravelIcon from "@/components/icons/LaravelIcon.vue";
import BootstrapIcon from "@/components/icons/BootstrapIcon.vue";
import PhpIcon from "@/components/icons/PhpIcon.vue";
import GitIcon from "@/components/icons/GitIcon.vue";
import MysqlIcon from "@/components/icons/MysqlIcon.vue";
import NuxtIcon from "@/components/icons/NuxtIcon.vue";
import CplusIcon from "@/components/icons/CplusIcon.vue";

const skills = [
  {
    website: "https://vuejs.org/",
    icon: VueIcon,
    title: "Vue.js",
  },
  {
    website: "https://inertiajs.com/",
    icon: InertiajsIcon,
    title: "Inertia.js",
  },
  {
    website: "https://tailwindcss.com/",
    icon: TailwindIcon,
    title: "Tailwind",
  },
  {
    website: "https://laravel.com/",
    icon: LaravelIcon,
    title: "Laravel",
  },
  {
    website: "https://getbootstrap.com/",
    icon: BootstrapIcon,
    title: "Bootstrap",
  },
  {
    website: "https://www.php.net/",
    icon: PhpIcon,
    title: "PHP",
  },
  {
    website: "https://git-scm.com/",
    icon: GitIcon,
    title: "Git",
  },
  {
    website: "https://www.mysql.com/",
    icon: MysqlIcon,
    title: "MySQL",
  },
  {
    website: "https://nuxt.com/",
    icon: NuxtIcon,
    title: "Nuxt",
  },
  {
    website: "https://cplusplus.com/",
    icon: CplusIcon,
    title: "C++",
  },
];
</script>
