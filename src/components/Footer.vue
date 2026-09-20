<script setup lang="ts">
import FacebookIcon from './icons/FacebookIcon.vue'
import GithubIcon from './icons/GithubIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
import TelegramIcon from './icons/TelegramIcon.vue'
import UpworkIcon from './icons/UpworkIcon.vue'
import ViberIcon from './icons/ViberIcon.vue'

const year = new Date().getFullYear()

const socials = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/Jpgomera19/',
        icon: FacebookIcon,
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/jphi.19/',
        icon: InstagramIcon,
    },
    {
        name: 'Github',
        url: 'https://github.com/japhg',
        icon: GithubIcon,
    },
    {
        name: 'Linkedin',
        url: 'https://linkedin.com/in/james-philip-gomera-b5b345281',
        icon: LinkedinIcon,
    },
    {
        name: 'Telegram',
        url: 'https://t.me/jphigomera',
        icon: TelegramIcon,
    },
    {
        name: 'Upwork',
        url: 'https://www.upwork.com/freelancers/~0134531ce6db4c80f1',
        icon: UpworkIcon,
    },
]
</script>

<template>
    <footer class="border-t border-secondary/10 px-5 py-8">
        <div class="mx-auto w-full max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
            <div class="text-sm text-center text-secondary/80 dark:text-muted md:text-left">
                <p>© {{ year }} Jphi — sketched, coded &amp; cared for in the Philippines.</p>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-3">
                <a
                    v-for="(social, key) in socials"
                    :key="key"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="motion-pill rounded-full border border-secondary/10 p-2 text-primary hover:bg-primary/5 dark:text-secondary dark:hover:bg-secondary/10"
                    :aria-label="social.name"
                >
                    <component
                        :is="social.icon"
                        class="w-5 h-5 fill-primary/80 dark:fill-white/80 hover:fill-mint dark:hover:fill-accent transition-all duration-300 ease-in-out"
                    />
                </a>
            </div>
        </div>
    </footer>
</template>
