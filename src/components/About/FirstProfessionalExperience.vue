<script setup lang="ts">
import StarIcon from '../icons/StarIcon.vue'
</script>

<template>
    <div class="glass-panel motion-surface h-full rounded-[1.5rem] p-6">
        <div class="text-primary dark:text-secondary flex flex-col gap-5">
            <div class="flex gap-3 items-start">
                <StarIcon class="w-5 h-5 mt-1 shrink-0 text-mint dark:text-accent" />
                <h1 class="w-full flex flex-col gap-1 text-xl md:text-2xl font-semibold leading-tight">
                    First Professional <span class="text-muted">Experience</span>
                </h1>
            </div>
            <div class="flex flex-col gap-5">
                <p class="text-secondary/80 dark:text-muted text-sm md:text-base leading-7">
                    My foundation in PHP, gained during Capstone days, enabled me to effortlessly
                    translate project requirements into robust and user-friendly solutions.
                    Leveraging this expertise, I consistently delivered high-quality outputs that
                    aligned with company expectations.
                </p>
                <ul class="flex flex-col gap-2">
                    <li
                        class="list-item list-disc ml-5 text-secondary/80 dark:text-muted text-sm md:text-base leading-7"
                    >
                        A Room Reservation System with real-time push notifications
                    </li>
                    <li
                        class="list-item list-disc ml-5 text-secondary/80 dark:text-muted text-sm md:text-base leading-7"
                    >
                        A comprehensive Training Management System
                    </li>
                    <li
                        class="list-item list-disc ml-5 text-secondary/80 dark:text-muted text-sm md:text-base leading-7"
                    >
                        An efficient Clinic Management System
                    </li>
                </ul>
                <p class="text-secondary/80 dark:text-muted text-sm md:text-base leading-7">
                    My most significant contribution was leading the development of the Human
                    Resource Management System (HRMS), which enhanced the internal process and
                    significantly improved workflow efficiency of Human Resource Department.
                </p>
            </div>
        </div>
    </div>
</template>
