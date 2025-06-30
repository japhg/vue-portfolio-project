<template>
  <a
    :href="website"
    target="_blank"
    rel="noopener noreferrer"
    class="bg-highlight px-5 py-4 rounded-lg shadow-md hover:bg-highlight/70 relative group"
  >
    <div class="flex flex-col items-center justify-center gap-2">
      <component :is="icon" class="w-12 h-12" />
      <p class="text-secondary font-medium text-center">
        {{ title }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
import VueIcon from "../../icons/VueIcon.vue";
import InertiajsIcon from "../../icons/InertiajsIcon.vue";
import LaravelIcon from "../../icons/LaravelIcon.vue";
import TailwindIcon from "../../icons/TailwindIcon.vue";
import BootstrapIcon from "../../icons/BootstrapIcon.vue";
import PhpIcon from "../../icons/PhpIcon.vue";
import GitIcon from "../../icons/GitIcon.vue";
import MysqlIcon from "../../icons/MysqlIcon.vue";
import CplusIcon from "../../icons/CplusIcon.vue";
import NuxtIcon from "../../icons/NuxtIcon.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
});
</script>
