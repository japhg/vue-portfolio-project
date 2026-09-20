<script setup lang="ts">
import StarIcon from '../icons/StarIcon.vue'
</script>

<template>
    <div class="glass-panel motion-surface h-full rounded-[1.5rem] p-6">
        <div class="text-primary dark:text-secondary flex flex-col gap-5">
            <div class="flex gap-3 items-start">
                <StarIcon class="w-5 h-5 mt-1 shrink-0 text-mint dark:text-accent" />
                <h1 class="w-full flex flex-col gap-1 text-xl md:text-2xl font-semibold leading-tight">
                    Exploring Frameworks
                    <span class="text-muted">and Modern Tools</span>
                </h1>
            </div>
            <div class="flex flex-col gap-5">
                <p class="text-secondary/80 dark:text-muted text-sm md:text-base leading-7">
                    Eager to expand my skill set, I embarked on a journey to master industry-leading
                    frameworks such as Laravel, Vue.js, and Inertia.js. Throughout this process, I'm
                    not only deepened my understanding of web development but also gained hands-on
                    experience in creating dynamic, full-stack applications. This comprehensive
                    training honed my ability to build scalable, maintainable systems and
                    significantly enhanced my analytical problem-solving skills, enabling me to
                    tackle complex development challenges with confidence.
                </p>
                <p class="text-secondary/80 dark:text-muted text-sm md:text-base leading-7">
                    Additionally, I became proficient in integrating front-end and back-end
                    technologies seamlessly, further solidifying my expertise as a full-stack
                    developer.
                </p>
            </div>
        </div>
    </div>
</template>
