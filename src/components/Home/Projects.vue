<script setup lang="ts">
import projects from '@/data/projects.json'


// Commented out for the meantime since the project is still under development
//  {
//         "url": "https://resumate-gray.vercel.app/",
//         "img": "/images/projects/resumate.png",
//         "title": "ResuMate",
//         "description": "Resumate is a modern resume builder that helps job seekers quickly create professional, polished resumes. Built with Nuxt, Tailwind, and Firebase, it offers a clean UI, customizable templates, and real-time editing to make showcasing skills and experience effortless. (Under Development)",
//         "techStack": ["Nuxt.js", "Vue.js", "Firebase", "TailwindCSS", "VueFire"]
//     },
</script>

<template>
    <section class="h-full px-5 mt-20" id="project">
        <div class="w-full flex justify-center items-center">
            <div class="w-full max-w-7xl flex flex-col gap-10">
                <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-medium text-center">
                    My <span class="text-accent">Projects</span>
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        v-for="(project, index) in projects"
                        :key="index"
                        class="flex flex-col flex-grow bg-secondary/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        data-aos="fade-up"
                        :data-aos-delay="index * 100"
                    >
                        <div class="w-full h-48 overflow-hidden">
                            <img
                                v-if="project.img != null"
                                :src="project.img"
                                :alt="project.title"
                                class="w-full h-full object-scale-down"
                            />
                        </div>
                        <div class="p-6 flex flex-col gap-4">
                            <a :href="project.url" target="_blank" class="hover:underline">
                                <h2 class="text-xl font-semibold text-secondary hover:text-accent">
                                    {{ project.title }}
                                </h2>
                            </a>
                            <p class="text-sm text-muted">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span
                                    v-for="(tech, techIndex) in project.techStack"
                                    :key="techIndex"
                                    class="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 mt-auto p-5">
                            <a
                                :href="project.url"
                                target="_blank"
                                class="inline-block px-6 py-3 font-semibold text-white border border-accent rounded-md transition-all duration-300 w-full text-center hover:bg-accent hover:text-black"
                            >
                                Preview
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
