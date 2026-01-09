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
    <footer class="mt-20 md:mt-32">
        <div class="w-full flex flex-col justify-center items-center">
            <div class="w-full h-full flex flex-col justify-center items-center gap-10">
                <h4 class="text-xl font-medium text-center text-primary dark:text-secondary">
                    Socials:
                </h4>
            </div>

            <div class="flex flex-wrap items-center gap-3 mt-3">
                <a
                    v-for="(social, key) in socials"
                    :key="key"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-accent"
                >
                    <component
                        :is="social.icon"
                        class="w-8 h-8 fill-primary/80 dark:fill-white/80 hover:fill-mint dark:hover:fill-accent hover:shadow-xl transition-all duration-300 ease-in-out"
                    />
                </a>
            </div>

            <div class="py-4 font-light text-sm text-center text-secondary/80 dark:text-muted">
                <hr class="border-secondary/10 mb-4" />
                <p>© {{ year }} Jph<i>i</i> Portfolio. All rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>
