<script setup lang="ts">
import EnvelopeIcon from '../icons/EnvelopeIcon.vue'

const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/japhg' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/james-philip-gomera-b5b345281' },
    { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0134531ce6db4c80f1' },
]
</script>

<template>
    <section class="section-shell px-5 py-20 md:py-28" id="contact">
        <div
            class="glass-panel motion-surface mx-auto grid w-full max-w-6xl gap-8 rounded-[2rem] p-6 md:grid-cols-[0.85fr_1.15fr] md:p-10"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div>
                <p class="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-mint">
                    Contact
                </p>
                <h1 class="font-semibold text-3xl md:text-5xl text-primary dark:text-secondary">
                    Let’s <span class="premium-gradient-text">Connect</span>
                </h1>
                <p class="mt-4 text-secondary/80 dark:text-muted text-base leading-7">
                    Got a project? Let's talk about it. I am available for professional systems,
                    web applications, and full-stack product work.
                </p>
                <a href="mailto:jpgomera19@gmail.com?subject=Inquiries" class="mt-8 inline-flex">
                    <button
                        class="motion-pill rounded-full border border-mint/40 bg-mint/10 px-5 py-3 text-sm font-medium text-mint hover:bg-mint hover:text-background sm:px-8"
                    >
                        <span class="flex items-center gap-2">
                            <EnvelopeIcon class="w-5 h-5" />
                            jpgomera19@gmail.com
                        </span>
                    </button>
                </a>

                <div class="mt-6 flex flex-wrap gap-2">
                    <a
                        v-for="social in socialLinks"
                        :key="social.label"
                        :href="social.href"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="motion-pill rounded-full border border-secondary/10 bg-background/50 px-4 py-2 text-sm font-semibold text-secondary hover:border-mint/40 hover:text-mint"
                    >
                        {{ social.label }}
                    </a>
                </div>
            </div>

            <form
                class="grid gap-4"
                action="mailto:jpgomera19@gmail.com?subject=Portfolio Inquiry"
                method="post"
                enctype="text/plain"
            >
                <label class="grid gap-2 text-sm font-medium text-secondary">
                    Name
                    <input
                        class="rounded-2xl border border-secondary/10 bg-background/60 px-4 py-3 text-primary outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
                        type="text"
                        name="name"
                        placeholder="Your name"
                    />
                </label>
                <label class="grid gap-2 text-sm font-medium text-secondary">
                    Email
                    <input
                        class="rounded-2xl border border-secondary/10 bg-background/60 px-4 py-3 text-primary outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                    />
                </label>
                <label class="grid gap-2 text-sm font-medium text-secondary">
                    Message
                    <textarea
                        class="min-h-32 rounded-2xl border border-secondary/10 bg-background/60 px-4 py-3 text-primary outline-none transition focus:border-mint focus:ring-4 focus:ring-mint/10"
                        name="message"
                        placeholder="Tell me about the project"
                    />
                </label>
                <button
                    type="submit"
                    class="motion-pill rounded-full border border-primary bg-primary px-5 py-3 text-sm font-semibold text-surface hover:bg-primary/85 dark:border-secondary dark:bg-secondary dark:text-background"
                >
                    Send inquiry
                </button>
            </form>
        </div>
    </section>
</template>
