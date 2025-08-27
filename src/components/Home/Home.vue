<script setup lang="ts">
import techStacks from '@/data/tech-stacks.json'
</script>

<template>
    <section class="flex justify-center items-center h-full sm:h-screen px-5" id="home">
        <div class="flex flex-col justify-center items-center gap-10">
            <div class="relative w-full max-w-7xl h-full min-h-[80vh] flex items-center">
                <!-- Background Elements -->
                <div class="hidden md:inline absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        class="absolute top-20 right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
                    />
                    <div
                        class="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                    />
                </div>

                <!-- Main Content -->
                <div class="relative w-full p-5">
                    <div class="max-w-3xl mx-auto ">
                        <!-- Header -->
                        <div class="space-y-5">
                            <h3
                                class="inline-flex items-center gap-2 text-lg text-mint dark:text-accent font-medium tracking-wide"
                                data-aos="fade-up"
                                data-aos-delay="0"
                                data-aos-duration="600"
                            >
                                <span class="w-10 h-px bg-mint dark:bg-accent" />
                                James Philip Gomera
                            </h3>

                            <h1
                                class="text-4xl md:text-6xl lg:text-7xl font-bold text-primary dark:text-white leading-tight tracking-tight"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="600"
                            >
                                I solve problems and
                                <span class="block mt-2">
                                    build for the
                                    <span class="text-mint dark:text-accent">web.</span>
                                </span>
                            </h1>

                            <p
                                class="text-secondary dark:text-muted text-base md:text-lg max-w-2xl"
                                data-aos="fade-up"
                                data-aos-delay="400"
                                data-aos-duration="600"
                            >
                                I'm a Full-Stack Web Developer with strong expertise in both
                                front-end and back-end technologies. Experienced in building
                                dynamic, responsive, and user-friendly web applications using modern
                                frameworks.
                            </p>
                        </div>

                        <!-- Actions -->
                        <div
                            class="flex flex-wrap items-center gap-4 mt-8"
                            data-aos="fade-up"
                            data-aos-delay="600"
                            data-aos-duration="600"
                        >
                            <a href="#project">
                                <button
                                    class="group relative px-8 py-3 border border-primary/60 dark:border-accent text-primary/80 dark:text-white text-sm md:text-base font-medium rounded-lg transition-all duration-300 hover:border-mint hover:bg-mint hover:text-white dark:hover:bg-accent/90 dark:hover:text-black hover:shadow-lg hover:shadow-accent/20"
                                >
                                    View My Work
                                    <div
                                        class="absolute inset-x-0 h-px -bottom-1 bg-primary dark:bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform"
                                    />
                                </button>
                            </a>
                            <a
                                href="#contact"
                                class="px-6 py-3 text-secondary/80 dark:text-muted text-sm md:text-base hover:text-mint dark:hover:text-accent transition-colors duration-300"
                            >
                                Let's Connect →
                            </a>
                        </div>

                        <!-- Tech Stack -->
                        <div
                            class="flex flex-wrap gap-2 mt-12"
                            data-aos="fade-up"
                            data-aos-delay="800"
                            data-aos-duration="600"
                        >
                            <span
                                v-for="(tech, index) in techStacks"
                                :key="index"
                                class="px-3 py-1 bg-primary/5 dark:bg-secondary/5 text-secondary dark:text-muted rounded-full text-sm"
                            >
                                {{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
