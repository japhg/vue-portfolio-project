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
        class="bg-highlight px-5 py-4 rounded-lg shadow-md hover:bg-highlight/70 relative group"
    >
        <div class="flex flex-col items-center justify-center gap-2" :title="title">
            <component :is="icon" class="w-12 h-12" />
            <p class="text-secondary font-medium text-center">
                {{ title }}
            </p>
        </div>
    </a>
</template>
