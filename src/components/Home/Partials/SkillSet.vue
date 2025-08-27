<script setup lang="ts">
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
})
</script>

<template>
    <a
        :href="website"
        target="_blank"
        rel="noopener noreferrer"
        class="bg-white/30 dark:bg-highlight px-5 py-4 rounded-lg shadow-sm hover:shadow-md border border-secondary/10 dark:border-none dark:hover:bg-highlight/80 relative group transition-all duration-300"
    >
        <div class="flex flex-col items-center justify-center gap-2" :title="title">
            <component :is="icon" class="w-12 h-12" />
            <p class="text-primary/60 dark:text-secondary font-medium text-center">
                {{ title }}
            </p>
        </div>
    </a>
</template>
