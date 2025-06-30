<template>
  <div class="w-full max-w-5xl flex flex-col gap-5">
    <h1
      class="text-secondary text-2xl md:text-5xl leading-2 font-light text-center"
    >
      Work <span class="text-accent">Experience</span>
    </h1>
    <div class="flex flex-col gap-10">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        class="w-full h-full flex flex-col gap-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="flex flex-col md:flex-row items-start md:items-center gap-2">
          <a
            :href="experience.url"
            target="_blank"
            class="flex gap-2 items-center text-secondary text-xl md:text-2xl font-medium hover:text-accent"
          >
            <LinkIcon class="w-4 h-4" />
            <h1 class="hover:underline">
              {{ experience.title }}
            </h1>
          </a>
        </div>
        <div>
          <h6 class="text-muted font-medium text-[15px] md:text-xl">
            {{ experience.subtitle }}
          </h6>
          <span class="text-muted text-sm">
            {{ experience.date }}
          </span>
        </div>
        <div
          v-for="description in experience.description"
          :key="description"
          class="text-muted text-sm md:text-lg mt-5"
          v-html="description"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkIcon from "../icons/LinkIcon.vue";

const experiences = [
  {
    title: "Full-Stack Web Developer",
    subtitle: "PCN Promopro Inc.",
    url: "https://pcnpromopro.com/",
    date: "May 2022 - April 2024",
    description: [
      'As a former <span class="text-secondary font-semibold">Full-Stack PHP Developer</span> at <span class="text-secondary font-semibold">PCN Promopro Inc.</span>, I played a key role in developing and implementing various systems to enhance organizational efficiency.',
      '<span class="text-accent font-semibold">Notable projects:</span><ul role="list" class="list-disc pl-8 "><li>Room Reservation System with Push Notification</li><li>Training Management System</li><li>Clinic Management System</li><li>Human Resource Management System (HRMS) – My most significant contribution, improving internal processes and significantly enhancing workflow efficiency in the HR department.</li></ul>',
      '<span class="text-accent font-semibold">Additional Contributions:</span><ul role="list" class="list-disc pl-8 "><li>Developed a custom system tailored to the company\'s needs.</li><li>Enhanced user experience by implementing responsive web design and optimizing website performance.</li><li>Resolved technical issues promptly, ensuring minimal disruption to website functionality and user satisfaction.</li><li>Provided technical support to employees, ensuring smooth system operations.</li></ul>',
    ],
  },
  {
    title: "Freelance",
    subtitle: "March 2024 - Present (Fullstack Web Developer)",
    description: [
      'A <span class="text-secondary font-semibold">freelance fullstack web developer</span> who is part of a team: <ul role="list" class="list-disc pl-8 "><li>Developed MTAP Systems</li><li>Developed TheCEplace</li><li>Worked on QuickJuan POS (development postponed to focus on other projects)</li><li>Developed UpMe website land page</li></ul>',
    ],
  },
  {
    title: "Upwork",
    subtitle: "March 2024 - May 2024 (Web Developer)",
    description: [
      'A freelance contract where I become part of the team developing a website called <span class="text-secondary font-semibold">Swingfox</span>: A dating site dedicated to celebrating fun and sexual exploration in all of its diverse forms.',
    ],
  },
];
</script>
