<script setup lang="ts">
import LinkIcon from '../icons/LinkIcon.vue'
import experiences from '@/data/experiences.json'
</script>
<template>
    <section class="h-full px-5" id="work-experience">
        <div class="w-full flex justify-center items-center">
            <div class="w-full max-w-5xl flex flex-col gap-8">
                <h2
                    class="text-primary dark:text-secondary text-2xl md:text-5xl leading-2 font-semibold text-center"
                >
                    Work <span class="text-mint dark:text-accent">Experience</span>
                </h2>
                <div class="relative flex flex-col gap-8">
                    <!-- Timeline line -->
                    <div
                        class="absolute left-0 md:left-1/2 h-full w-px bg-secondary/20 dark:bg-accent/20 transform -translate-x-px md:-translate-x-px"
                    />

                    <div
                        v-for="(experience, index) in experiences"
                        :key="index"
                        class="relative grid grid-cols-1 md:grid-cols-2 gap-8"
                        :class="
                            index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:transform md:translate-x-full'
                        "
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <!-- Timeline dot -->
                        <div
                            class="absolute -left-0.5 md:left-1/2 w-4 h-4 bg-mint dark:bg-accent rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-2"
                        />

                        <!-- Content card -->
                        <div
                            class="ml-6 md:ml-0 bg-white/95 dark:bg-secondary/5 border border-secondary/10 dark:border-none rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                            :class="index % 2 === 1 ? 'md:mr-8' : 'md:ml-8 md:col-start-1'"
                        >
                            <div class="flex items-start gap-4 mb-4">
                                <div class="flex-1">
                                    <a
                                        v-if="experience.url"
                                        :href="experience.url"
                                        target="_blank"
                                        class="group inline-flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300"
                                    >
                                        <h2 class="text-xl font-bold group-hover:underline">
                                            {{ experience.title }}
                                        </h2>
                                        <LinkIcon
                                            class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </a>
                                    <h3 v-else class="text-xl font-bold text-primary">
                                        {{ experience.title }}
                                    </h3>
                                    <div class="mt-1">
                                        <h4
                                            class="text-base font-medium text-secondary/80 dark:text-muted"
                                        >
                                            {{ experience.subtitle }}
                                        </h4>
                                        <p class="text-sm text-mint dark:text-accent mt-1">
                                            {{ experience.date }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="space-y-4">
                                <div
                                    v-for="(desc, descIndex) in experience.description"
                                    :key="descIndex"
                                    class="prose prose-invert text-sm text-secondary/80 dark:text-muted max-w-none"
                                    v-html="desc"
                                />
                            </div>

                            <div v-if="experience.techStack" class="mt-4 flex flex-wrap gap-2">
                                <span
                                    v-for="tech in experience.techStack"
                                    :key="tech"
                                    class="px-2 py-1 text-xs rounded-full bg-mint/10 text-mint dark:bg-accent/10 dark:text-accent"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
