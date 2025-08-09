<template>
  <div class="w-full max-w-5xl flex flex-col gap-8">
    <h1
      class="text-secondary text-2xl md:text-5xl leading-2 font-medium text-center"
    >
      Work <span class="text-accent">Experience</span>
    </h1>
    <div class="relative flex flex-col gap-8">
      <!-- Timeline line -->
      <div
        class="absolute left-0 md:left-1/2 h-full w-px bg-accent/20 transform -translate-x-px md:-translate-x-px"
      ></div>

      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="relative grid grid-cols-1 md:grid-cols-2 gap-8"
        :class="
          index % 2 === 0
            ? 'md:pr-8'
            : 'md:pl-8 md:transform md:translate-x-full'
        "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <!-- Timeline dot -->
        <div
          class="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1.5 md:-translate-x-2 mt-2"
        ></div>

        <!-- Content card -->
        <div
          class="ml-6 md:ml-0 bg-secondary/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          :class="index % 2 === 1 ? 'md:mr-8' : 'md:ml-8 md:col-start-1'"
        >
          <div class="flex items-start gap-4 mb-4">
            <div class="flex-1">
              <a
                v-if="experience.url"
                :href="experience.url"
                target="_blank"
                class="group inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors duration-300"
              >
                <h2 class="text-xl font-bold group-hover:underline">
                  {{ experience.title }}
                </h2>
                <LinkIcon
                  class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <h2 v-else class="text-xl font-bold text-secondary">
                {{ experience.title }}
              </h2>
              <div class="mt-1">
                <h3 class="text-base font-medium text-muted">
                  {{ experience.subtitle }}
                </h3>
                <p class="text-sm text-accent mt-1">{{ experience.date }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <div
              v-for="(desc, descIndex) in experience.description"
              :key="descIndex"
              class="text-sm text-muted prose prose-invert max-w-none"
              v-html="desc"
            ></div>
          </div>

          <div v-if="experience.techStack" class="mt-4 flex flex-wrap gap-2">
            <span
              v-for="tech in experience.techStack"
              :key="tech"
              class="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkIcon from "../icons/LinkIcon.vue";

const experiences = [
  {
    title: "Full-Stack Web Developer",
    subtitle: "Independent Projects",
    date: "March 2024 - Present",
    description: [
      '<span class="text-accent font-semibold">Major Projects</span><ul role="list" class="list-disc pl-8 space-y-1"><li>MTAP Systems - Healthcare Assessment Platform</li><li>UpmeWorks - Business Software Platform</li><li>TheCEplace - E-learning Platform</li><li>QuickJuan POS - Point of Sale System (In Development)</li></ul>',
      '<span class="text-accent font-semibold">Responsibilities</span><ul role="list" class="list-disc pl-8 space-y-1"><li>Full-stack development of web applications</li><li>Client consultation and requirement gathering</li><li>System architecture design</li><li>Performance optimization and maintenance</li></ul>',
    ],
    techStack: [
      "Vue.js",
      "Laravel",
      "MySQL",
      "TailwindCSS",
      "TypeScript",
      "Git",
      "REST API",
    ],
  },
  {
    title: "Freelance Developer",
    subtitle: "Upwork",
    date: "March 2024 - May 2024",
    description: [
      '<span class="text-accent font-semibold">Project Highlights</span><ul role="list" class="list-disc pl-8 space-y-1"><li>Developed key features for a social networking platform</li><li>Implemented secure user authentication system</li><li>Created responsive and interactive UI components</li><li>Optimized database queries for better performance</li></ul>',
    ],
    techStack: [
      "Vue.js",
      "Node.js",
      "PostgreSQL",
      "TailwindCSS",
      "WebSocket",
      "AWS",
    ],
  },
  {
    title: "Web Developer / IT Support",
    subtitle: "PCN Promopro Inc.",
    url: "https://pcnpromopro.com/",
    date: "May 2022 - April 2024",
    description: [
      'As a <span class="text-secondary font-semibold">Full-Stack PHP Developer</span>, I played a key role in developing and implementing various systems to enhance organizational efficiency.',
      '<span class="text-accent font-semibold">Notable Projects</span><ul role="list" class="list-disc pl-8 space-y-1"><li>Human Resource Management System (HRMS)</li><li>Training Management System</li><li>Clinic Management System</li><li>Room Reservation System with Push Notifications</li></ul>',
      '<span class="text-accent font-semibold">Key Achievements</span><ul role="list" class="list-disc pl-8 space-y-1"><li>Led the development of the HRMS, significantly improving HR department workflow efficiency</li><li>Implemented responsive design principles across all systems</li><li>Reduced system downtime through proactive maintenance</li><li>Provided technical mentorship to junior developers</li></ul>',
    ],
    techStack: [
      "PHP",
      "MySQL",
      "jQuery",
      "Bootstrap",
      "AJAX",
      "REST API",
      "Git",
    ],
  },
];
</script>
