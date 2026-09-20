<script setup lang="ts">
import StarIcon from '../icons/StarIcon.vue'
</script>

<template>
    <div class="glass-panel motion-surface h-full rounded-[1.5rem] p-6">
        <div class="text-primary dark:text-secondary flex flex-col gap-5">
            <div class="flex gap-3 items-start">
                <StarIcon class="w-5 h-5 mt-1 shrink-0 text-mint dark:text-accent" />
                <h1 class="w-full flex flex-col gap-1 text-xl md:text-2xl font-semibold leading-tight">
                    My Journey Into <span class="text-muted">Web Development</span>
                </h1>
            </div>
            <div class="flex flex-col gap-5">
                <p class="text-secondary/80 dark:text-muted text-sm md:text-base leading-7">
                    I began my journey in web development during my third year of college when one
                    of my subjects, Project Management, required us to create a web-based system.
                    The first system that I developed was a Student Information System.
                </p>
                <p class="text-secondary/80 dark:text-muted text-sm md:text-base leading-7">
                    During my fourth year of college, I was elected as the Lead Programmer of my
                    cluster. My responsibilities included managing the programmers and overseeing
                    the integration of our Enterprise Integration System (EIS). The system I
                    developed was a Human Resource Management System, which handled tasks such as
                    hiring, processing applicants’ requirements, conducting interviews, and more. It
                    took me almost three months to developed this system.
                </p>
            </div>
        </div>
    </div>
</template>
