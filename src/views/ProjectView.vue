<template>
  <div class="w-full h-full max-w-5xl my-20 flex flex-col gap-14 font-sans">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light">
      Projects
    </h1>

    <div
      class="grid lg:grid-cols-2 gap-x-10 md:gap-x-16 xl:gap-x-20 gap-y-12 md:gap-y-24 lg:gap-y-40 mb-auto md:mb-52"
    >
      <template v-for="(project, index) in projects">
        <div
          class="bg-white rounded-3xl shadow-md h-full group hover:scale-[1.01] transition-all duration-150"
        >
          <div class="p-10">
            <img class="rounded-lg w-full" :src="project.img" />
          </div>

          <div class="flex flex-col gap-4 items-start px-10 pb-10">
            <h3
              class="text-xl md:text-2xl font-bold text-secondary"
              v-html="project.title"
            />

            <p
              class="text-left text-sm md:text-base font-light text-secondary leading-relaxed"
            >
              {{ project.description }}
            </p>

            <a
              :href="project.url"
              target="_blank"
              class="text-secondary border border-secondary px-5 py-3 mt-5 rounded-full font-light text-sm md:text-base hover:bg-secondary hover:text-white transition-colors"
            >
              <span class="flex items-center gap-1 text-sm">
                View Site
                <ArrowUpRightIcon  class="w-3.5 h-3.5" />
              </span>
            </a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowUpRightIcon from '@/components/icons/ArrowUpRightIcon.vue';

const projects = [
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
