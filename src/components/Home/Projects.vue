<template>
  <div class="w-full max-w-5xl flex flex-col gap-10">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light text-center">
      My <span class="text-accent">Projects</span>
    </h1>
    <div
      v-for="(project, index) in projects"
      :key="index"
      class="w-full grid md:grid-cols-2 gap-10 items-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div
        class="w-full h-72 rounded-lg"
        :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'"
      >
        <img
          :src="project.img"
          :alt="project.title"
          class="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div
        class="flex flex-col gap-4"
        :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'"
      >
        <a :href="project.url" target="_blank" class="hover:underline">
          <h1 class="text-xl md:text-3xl font-bold text-secondary hover:text-accent">
            {{ project.title }}
          </h1>
        </a>
        <p class="text-sm md:text-lg text-muted">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    url: "https://upmeworks.com/",
    img: "/images/projects/UpmeWorks.png",
    title: "UpmeWorks",
    description:
      "is a business software that simply works for various industries. Our solutions seamlessly combine ready-to-use features with the flexibility of customization.",
  },
  {
    url: "https://mtapsystems.com/",
    img: "/images/projects/MTAP_Systems.png",
    title: "MTAP Systems",
    description:
      "MTAPSystems is a turnkey interactive website for identifying functional abilities, disabilities, and physical performance that can be used as integral components for patient management, particularly those with musculoskeletal disorders (MSDs).",
  },
  {
    url: "https://jobs.hrdpcnpromopro.com/index1.php",
    img: "/images/projects/PCN_Job_Portal.png",
    title: "Job Portal",
    description:
      "PCN Job Portal is an online platform that provides a space where applicants can search for job opportunities, apply for positions and manage their personal information.",
  },
  {
    url: "https://portal.hrdpcnpromopro.com/index1.php",
    img: "/images/projects/PCN_HMS.png",
    title: "Human Resource Management System",
    description:
      "PCN HRMS is designed to help company manage and automate various human resource (HR) department functions and processes. It serves as a centralized system that streamlines the management of employee information, recruitment, 201 files, training, and more.",
  },
  {
    url: "https://clinic.pcnpromopro.com/",
    img: "/images/projects/Clinic_Management_System.png",
    title: "Clinic Management System",
    description:
      "Clinic Management System is designed to automate clinical processes such as setting appointments, managing patient information, health records, and more.",
  },
  {
    url: "https://training.pcnpromopro.com/",
    img: "/images/projects/Training_Management_System.png",
    title: "Training Management System",
    description:
      "Training Management System is designed to manage and streamline the process of planning, delivering, and tracking employee training and development programs within an organization. It serves as a centralized platform for organizing various aspects of training, such as scheduling, content delivery, assessments, and performance tracking.",
  },
  {
    url: "https://room.pcnpromopro.com/Room/index.php",
    img: "/images/projects/Room_Reservation_System.png",
    title: "Room Reservation System",
    description:
      "Room Reservation System is designed to automate the process of reserving rooms and managing room bookings for various events, meetings, and other activities. This system allows users to view room availability, make reservations, and track room usage, while also providing administrators with tools to manage bookings, resources, and schedules.",
  },
];
</script>
