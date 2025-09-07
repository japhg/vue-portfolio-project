<script setup lang="ts">
import StarIcon from '../icons/StarIcon.vue'
</script>

<template>
    <div class="w-full h-full flex items-center justify-between">
        <div class="max-w-3xl">
            <div class="flex items-center gap-10">
                <div class="text-primary dark:text-secondary flex flex-col gap-5">
                    <div class="flex gap-3 items-center">
                        <StarIcon class="w-5 h-5 text-mint dark:text-accent" />
                        <h1
                            class="w-full flex flex-col md:flex-row md:gap-3 text-xl md:text-3xl font-normal"
                        >
                            First Professional <span class="text-muted">Experience</span>
                        </h1>
                    </div>
                    <div class="flex flex-col gap-5">
                        <p class="text-secondary/80 dark:text-muted text-sm md:text-lg">
                            My foundation in PHP, gained during Capstone days, enabled me to
                            effortlessly translate project requirements into robust and
                            user-friendly solutions. Leveraging this expertise, I consistently
                            delivered high-quality outputs that aligned with company expectations.
                        </p>
                        <ul class="flex flex-col gap-2">
                            <li
                                class="list-item list-disc ml-10 text-secondary/80 dark:text-muted text-sm md:text-lg"
                            >
                                A Room Reservation System with real-time push notifications
                            </li>
                            <li
                                class="list-item list-disc ml-10 text-secondary/80 dark:text-muted text-sm md:text-lg"
                            >
                                A comprehensive Training Management System
                            </li>
                            <li
                                class="list-item list-disc ml-10 text-secondary/80 dark:text-muted text-sm md:text-lg"
                            >
                                An efficient Clinic Management System
                            </li>
                        </ul>
                        <p class="text-secondary/80 dark:text-muted text-sm md:text-lg">
                            My most significant contribution was leading the development of the
                            Human Resource Management System (HRMS), which enhanced the internal
                            process and significantly improved workflow efficiency of Human Resource
                            Department.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
