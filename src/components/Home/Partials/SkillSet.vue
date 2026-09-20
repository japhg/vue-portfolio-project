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
        class="motion-surface relative group overflow-hidden rounded-2xl border border-secondary/10 bg-background/60 px-4 py-4 hover:bg-primary/5 dark:hover:bg-secondary/10"
    >
        <div
            class="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-mint/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
        <div class="flex flex-col items-center justify-center gap-2" :title="title">
            <component :is="icon" class="w-10 h-10" />
            <p class="text-primary/70 dark:text-secondary font-medium text-center text-sm">
                {{ title }}
            </p>
        </div>
    </a>
</template>
