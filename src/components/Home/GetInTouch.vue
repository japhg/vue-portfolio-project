<script setup lang="ts">
import EnvelopeIcon from '../icons/EnvelopeIcon.vue'
</script>

<template>
    <section class="h-fit my-28 px-5" id="contact">
        <div
            class="w-full flex flex-col justify-center items-center gap-2"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <h1 class="font-semibold text-4xl text-primary dark:text-secondary">
                Let’s <span class="text-mint dark:text-accent">Connect</span>
            </h1>
            <p class="text-secondary/80 dark:text-muted text-base">
                Got a project? Let's talk about it.
            </p>
        </div>
        <div
            class="mt-10 w-full flex justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <a href="mailto:jpgomera19@gmail.com?subject=Inquiries">
                <button
                    class="text-mint dark:text-accent border border-mint dark:border-accent px-8 py-3 rounded-md font-medium text-sm hover:bg-mint/10 dark:hover:bg-accent/10 transition-colors"
                >
                    <span class="flex items-center gap-2">
                        <EnvelopeIcon class="w-5 h-5" />
                        jpgomera19@gmail.com
                    </span>
                </button>
            </a>
        </div>
    </section>
</template>
