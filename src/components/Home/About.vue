<script setup lang="ts">
import ExploringFrameworks from '../About/ExploringFrameworks.vue'
import FirstProfessionalExperience from '../About/FirstProfessionalExperience.vue'
import HowHeFound from '../About/HowHeFound.vue'
</script>

<template>
    <section class="section-shell px-5 py-20 md:py-28" id="about">
        <div class="mx-auto w-full max-w-7xl">
            <!-- Overview Section -->
            <div class="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:p-10 mb-12">
                <div class="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-mint">
                            About me
                        </p>
                        <h2
                            class="text-primary dark:text-secondary text-3xl md:text-5xl leading-tight font-semibold"
                        >
                            Systems thinking with a product mindset.
                        </h2>
                    </div>

                    <div class="space-y-6">
                        <p class="text-secondary/85 dark:text-muted text-base md:text-lg leading-8">
                            I am a passionate
                            <span class="text-mint dark:text-accent font-medium">
                                full-stack web developer
                            </span>
                            who currently based in the Philippines. I graduated with a Bachelor’s
                            degree in Information Technology, majoring in Information Management,
                            from Bestlink College of the Philippines.
                        </p>

                        <!-- Quick Stats -->
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div class="motion-surface rounded-2xl border border-secondary/10 bg-background/60 p-4">
                                <div
                                    class="text-mint dark:text-accent text-2xl md:text-3xl font-bold"
                                >
                                    2+
                                </div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">
                                    Years Experience
                                </div>
                            </div>
                            <div class="motion-surface rounded-2xl border border-secondary/10 bg-background/60 p-4">
                                <div
                                    class="text-mint dark:text-accent text-2xl md:text-3xl font-bold"
                                >
                                    10+
                                </div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">
                                    Projects Completed
                                </div>
                            </div>
                            <div class="motion-surface rounded-2xl border border-secondary/10 bg-background/60 p-4">
                                <div
                                    class="text-mint dark:text-accent text-2xl md:text-3xl font-bold"
                                >
                                    5+
                                </div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">
                                    Happy Clients
                                </div>
                            </div>
                            <div class="motion-surface rounded-2xl border border-secondary/10 bg-background/60 p-4">
                                <div
                                    class="text-mint dark:text-accent text-2xl md:text-3xl font-bold"
                                >
                                    3+
                                </div>
                                <div class="text-gray-500 dark:text-muted text-sm mt-1">
                                    Companies Worked
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Journey Sections -->
            <div class="grid gap-6 lg:grid-cols-3">
                <div>
                    <HowHeFound data-aos="fade-up" />
                </div>

                <div>
                    <FirstProfessionalExperience data-aos="fade-up" />
                </div>

                <div>
                    <ExploringFrameworks data-aos="fade-up" />
                </div>
            </div>
        </div>
    </section>
</template>
