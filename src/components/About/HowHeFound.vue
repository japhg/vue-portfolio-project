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
                            My Journey Into <span class="text-muted">Web Development</span>
                        </h1>
                    </div>
                    <div class="flex flex-col gap-5">
                        <p class="text-secondary/80 dark:text-muted text-sm md:text-lg">
                            I began my journey in web development during my third year of college
                            when one of my subjects, Project Management, required us to create a
                            web-based system. The first system that I developed was a Student
                            Information System.
                        </p>
                        <p class="text-secondary/80 dark:text-muted text-sm md:text-lg">
                            During my fourth year of college, I was elected as the Lead Programmer
                            of my cluster. My responsibilities included managing the programmers and
                            overseeing the integration of our Enterprise Integration System (EIS).
                            The system I developed was a Human Resource Management System, which
                            handled tasks such as hiring, processing applicants’ requirements,
                            conducting interviews, and more. It took me almost three months to
                            developed this system.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
