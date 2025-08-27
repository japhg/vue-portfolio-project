<script setup lang="ts">
import ExploringFrameworks from '../About/ExploringFrameworks.vue'
import FirstProfessionalExperience from '../About/FirstProfessionalExperience.vue'
import HowHeFound from '../About/HowHeFound.vue'
</script>

<template>
    <section class="flex h-full mb-20 px-5" id="about">
        <div class="flex flex-col">
            <div class="w-full max-w-7xl mt-20">
                <!-- Hero Section -->
                <div
                    class="relative overflow-hidden rounded-2xl bg-white/90 dark:bg-secondary/5 p-8 md:p-12 mb-16 border border-secondary/10 shadow-sm"
                >
                    <div class="relative z-10">
                        <h2
                            class="text-primary dark:text-secondary text-3xl md:text-5xl leading-tight font-semibold mb-6"
                        >
                            About <span class="text-mint dark:text-accent">Me</span>
                        </h2>

                        <div class="max-w-3xl space-y-6">
                            <p
                                class="text-secondary/85 dark:text-muted text-base md:text-lg leading-relaxed"
                            >
                                I am a passionate
                                <span class="text-mint dark:text-accent font-medium">
                                    full-stack web developer
                                </span>
                                based in the Philippines, dedicated to creating elegant solutions to
                                complex problems.
                            </p>
                            <p
                                class="text-secondary/85 dark:text-muted text-base md:text-lg leading-relaxed"
                            >
                                With a
                                <span class="text-primary dark:text-secondary font-medium">
                                    Bachelor's degree in Information Technology
                                </span>
                                , major in Information Management from Bestlink College of the
                                Philippines, I bring a solid foundation in both theory and practice
                                to my development work.
                            </p>
                        </div>

                        <!-- Quick Stats -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                            <div class="p-4 bg-primary/5 dark:bg-secondary/10 rounded-lg">
                                <div class="text-mint dark:text-accent text-2xl md:text-3xl font-bold">2+</div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">Years Experience</div>
                            </div>
                            <div class="p-4 bg-primary/5 dark:bg-secondary/10 rounded-lg">
                                <div class="text-mint dark:text-accent text-2xl md:text-3xl font-bold">10+</div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">Projects Completed</div>
                            </div>
                            <div class="p-4 bg-primary/5 dark:bg-secondary/10 rounded-lg">
                                <div class="text-mint dark:text-accent text-2xl md:text-3xl font-bold">5+</div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">Happy Clients</div>
                            </div>
                            <div class="p-4 bg-primary/5 dark:bg-secondary/10 rounded-lg">
                                <div class="text-mint dark:text-accent text-2xl md:text-3xl font-bold">3+</div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">Companies Worked</div>
                            </div>
                        </div>
                    </div>

                    <!-- Background Pattern -->
                    <div class="absolute top-0 right-0 w-1/3 h-full opacity-5">
                        <div
                            class="w-full h-full bg-gradient-to-bl from-mint/60 dark:from-accent to-transparent"
                        ></div>
                    </div>
                </div>

                <!-- Journey Sections -->
                <div class="space-y-16">
                    <div class="transform hover:scale-[1.01] transition-transform duration-300">
                        <HowHeFound data-aos="fade-up" />
                    </div>

                    <div class="transform hover:scale-[1.01] transition-transform duration-300">
                        <FirstProfessionalExperience data-aos="fade-up" />
                    </div>

                    <div class="transform hover:scale-[1.01] transition-transform duration-300">
                        <ExploringFrameworks data-aos="fade-up" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
