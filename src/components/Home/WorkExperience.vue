<template>
  <div class="w-full max-w-7xl flex flex-col gap-5">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light">
      Work <span class="text-softGray">Experience</span>
    </h1>

    <div v-for="(experience, index) in experiences" :key="index" class="mt-6">
      <a
        :href="experience.companyWebsite"
        target="_blank"
        class="text-secondary text-xl md:text-2xl font-medium underline"
        >{{ experience.company }}</a
      >
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
const experiences = [
  {
    company: "Freelance",
    companyWebsite: "#",
    subtitle: "March 2024 - Present (Fullstack Web Developer)",
    descriptions: [
      "A freelance fullstack web developer who is part of a team: <ul role=\"list\" class=\"list-disc pl-8 \"><li>Developed <span class=\"text-secondary font-semibold\">MTAP Systems</></li><li>Developed <span class=\"text-secondary font-semibold\">TheCEplace</span></li><li>Worked on <span class=\"text-secondary font-semibold\">QuickJuan POS</span> (development postponed to focus on other projects)</li><li>Developed <span class=\"text-secondary font-semibold\">UpMe</span> website land page</li></ul>",
    ],
  },
  {
    company: "Upwork",
    companyWebsite: "https://www.upwork.com/freelancers/~0134531ce6db4c80f1",
    subtitle: "March 2024 - May 2024 (Web Developer)",
    descriptions: [
      "A freelance contract where I become part of the team developing a website called <span class=\"text-secondary font-semibold\">Swingfox</span>: A dating site dedicated to celebrating fun and sexual exploration in all of its diverse forms.",
    ],
  },
  {
    company: "PCN Promopro Inc.",
    companyWebsite: "https://www.pcnpromopro.com/",
    subtitle:
      "September 2024 - March 2024 (Fullstack Web Developer / IT Support)",
    descriptions: [
      "As a former <span class=\"text-secondary font-semibold\">Full-Stack PHP Developer</span> at <span class=\"text-secondary font-semibold\">PCN Promopro Inc.</span>, I played a key role in developing and implementing various systems to enhance organizational efficiency.",
      "<span class=\"text-secondary font-semibold\">Notable projects:</span><ul role=\"list\" class=\"list-disc pl-8 \"><li><span class=\"text-secondary font-semibold\">Room Reservation System</span> with Push Notification</li><li><span class=\"text-secondary font-semibold\">Training Management System</span></li><li><span class=\"text-secondary font-semibold\">Clinic Management System</span></li><li><span class=\"text-secondary font-semibold\">Human Resource Management System (HRMS)</span> – My most significant contribution, improving internal processes and significantly enhancing workflow efficiency in the HR department.</li></ul>",
      "<span class=\"text-secondary font-semibold\">Additional Contributions:</span><ul role=\"list\" class=\"list-disc pl-8 \"><li>Developed a <span class=\"text-secondary font-semibold\">custom system</span> tailored to the company’s needs.</li><li>Enhanced <span class=\"text-secondary font-semibold\">user experience</span> by implementing <span class=\"text-secondary font-semibold\">responsive web design</span> and optimizing website performance.</li><li><span class=\"text-secondary font-semibold\">Resolved technical issues</span> promptly, ensuring minimal disruption to website functionality and user satisfaction.</li><li>Provided <span class=\"text-secondary font-semibold\">technical support</span> to employees, ensuring smooth system operations.</li></ul>",
    ],
  },
];
</script>
