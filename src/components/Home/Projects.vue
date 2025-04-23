<template>
  <div class="w-full h-full my-20 flex flex-col gap-14 font-sans">
    <h1 class="text-secondary text-2xl md:text-5xl leading-2 font-light">
      Projects
    </h1>

    <div>
      <Carousel
        :value="projects"
        :numVisible="1"
        :numScroll="1"
        orientation="horizontal"
        containerClass="w-full"
        :showNavigators="false"
        :autoplayInterval="5000"
        circular
      >
        <template #item="slotProps">
          <div
            class="flex flex-col w-full max-w-4xl mx-auto bg-gray-100 rounded-xl overflow-hidden shadow-lg p-5"
          >
            <!-- Image -->
            <img
              :src="slotProps.data.img"
              :alt="slotProps.data.title"
              class="w-full h-[250px] md:h-[400px] object-fit md:object-none"
            />

            <!-- Content -->
            <div class="space-y-4 text-center md:text-left mx-10">
              <a
                :href="slotProps.data.url"
                class="text-xl md:text-3xl font-bold text-secondary hover:underline"
                target="_blank"
                v-html="slotProps.data.title"
              />
              <p
                v-if="slotProps.data.description"
                class="text-sm md:text-lg text-secondary tracking-wider"
              >
                {{ slotProps.data.description }}
              </p>

              <div class="pt-4">
                <Link
                  v-if="slotProps.data.slug"
                  :href="`/products/${slotProps.data.slug}`"
                  class="inline-block px-6 py-2 bg-primary-400 hover:bg-primary-500 text-white rounded-lg transition"
                  :aria-label="`Learn more about ${slotProps.data.name}`"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel } from "primevue";

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
