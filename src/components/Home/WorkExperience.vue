<template>
  <div class="w-full max-w-7xl flex flex-col gap-5">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light animate__animated animate__fadeInUp">
      Work <span class="text-softGray">Experience</span>
    </h1>

    <div v-for="(experience, index) in experiences" :key="index" class="mt-6">
      <a
        :href="experience.companyWebsite"
        target="_blank"
        class="flex gap-2 items-center text-secondary text-xl md:text-2xl font-medium hover:underline"
      >
        {{ experience.company }}
        <LinkIcon class="w-4 h-4" />
      </a>
      <h6 class="text-softGray font-medium text-[15px] md:text-base italic">
        {{ experience.subtitle }}
      </h6>

      <p
        v-for="description in experience.descriptions"
        class="text-secondary text-sm md:text-base font-light mt-5 tracking-wide"
      >
        <span v-html="description" />
      </p>
      <hr class="border-softBlack mt-10" />
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkIcon from '../icons/LinkIcon.vue';

const experiences = [
  {
    company: "Freelance",
    companyWebsite: "#",
    subtitle: "March 2024 - Present (Fullstack Web Developer)",
    descriptions: [
      'A <span class="text-secondary font-semibold">freelance fullstack web developer</span> who is part of a team: <ul role="list" class="list-disc pl-8 "><li>Developed MTAP Systems</li><li>Developed TheCEplace</li><li>Worked on QuickJuan POS (development postponed to focus on other projects)</li><li>Developed UpMe website land page</li></ul>',
    ],
  },
  {
    company: "Upwork",
    companyWebsite: "https://www.upwork.com/freelancers/~0134531ce6db4c80f1",
    subtitle: "March 2024 - May 2024 (Web Developer)",
    descriptions: [
      'A freelance contract where I become part of the team developing a website called <span class="text-secondary font-semibold">Swingfox</span>: A dating site dedicated to celebrating fun and sexual exploration in all of its diverse forms.',
    ],
  },
  {
    company: "PCN Promopro Inc.",
    companyWebsite: "https://www.pcnpromopro.com/",
    subtitle:
      "September 2024 - March 2024 (Fullstack Web Developer / IT Support)",
    descriptions: [
      'As a former <span class="text-secondary font-semibold">Full-Stack PHP Developer</span> at <span class="text-secondary font-semibold">PCN Promopro Inc.</span>, I played a key role in developing and implementing various systems to enhance organizational efficiency.',
      '<span class="text-secondary font-semibold">Notable projects:</span><ul role="list" class="list-disc pl-8 "><li>Room Reservation System with Push Notification</li><li>Training Management System</li><li>Clinic Management System</li><li>Human Resource Management System (HRMS) – My most significant contribution, improving internal processes and significantly enhancing workflow efficiency in the HR department.</li></ul>',
      '<span class="text-secondary font-semibold">Additional Contributions:</span><ul role="list" class="list-disc pl-8 "><li>Developed a custom system tailored to the company’s needs.</li><li>Enhanced user experience by implementing responsive web design and optimizing website performance.</li><li>Resolved technical issues promptly, ensuring minimal disruption to website functionality and user satisfaction.</li><li>Provided technical support to employees, ensuring smooth system operations.</li></ul>',
    ],
  },
];
</script>
