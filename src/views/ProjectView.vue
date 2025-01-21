<template>
  <div class="w-full h-full max-w-5xl my-20 flex flex-col gap-14 font-sans">
    <h1 class="text-secondary text-2xl md:text-[60px] leading-2 font-semibold">
      Projects
    </h1>

    <div
      class="grid lg:grid-cols-2 gap-x-10 md:gap-x-16 xl:gap-x-32 gap-y-12 md:gap-y-24 lg:gap-y-40 mb-auto md:mb-52"
    >
      <template v-for="(project, index) in projects">
        <div
          class="bg-primary rounded-3xl shadow-md h-fit group hover:scale-[0.98] transition-all duration-150"
          :class="index % 2 != 0 && 'lg:translate-y-72'"
        >
          <div class="p-4">
            <img class="rounded-lg w-full" :src="project.img" />
          </div>

          <div class="flex flex-col gap-4 items-start px-10 pb-10">
            <h3
              class="text-xl md:text-3xl font-semibold text-softBlack"
              v-html="project.title"
            />

            <p class="text-left text-base md:text-xl text-softBlack leading-relaxed">
              {{ project.description }}
            </p>

            <a
              :href="project.url"
              target="_blank"
              class="text-secondary border border-secondary px-10 py-4 rounded-xl font-light text-sm md:text-base"
              >View Site</a
            >
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    url: "https://mtap.dev6.demosite.us/",
    img: "/images/projects/MTAP_Systems.png",
    title: "MTAP Systems",
    description:
      "MTAPSystems is a turnkey interactive website for identifying functional abilities, disabilities, and physical performance that can be used as integral components for patient management, particularly those with musculoskeletal disorders (MSDs).",
  },
  {
    url: "https://jobs.hrdpcnpromopro.com/index1.php",
    img: "/images/projects/PCN_Job_Portal.png",
    title: "PCN Job Portal",
    description:
      "PCN Job Portal is an online platform that provides a space where applicants can search for job opportunities, apply for positions and manage their personal information.",
  },
  {
    url: "https://portal.hrdpcnpromopro.com/index1.php",
    img: "/images/projects/PCN_HMS.png",
    title: "PCN - HRMS",
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
