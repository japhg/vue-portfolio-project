<script setup lang="ts">
import techStacks from '@/data/tech-stacks.json'
</script>

<template>
    <section class="hero-section relative px-5 pt-28 md:pt-36" id="home">
        <div class="doodle-cloud doodle-cloud-one" aria-hidden="true">☁</div>
        <div class="doodle-cloud doodle-cloud-two" aria-hidden="true">☁</div>
        <div class="doodle-spark" aria-hidden="true">✦</div>

        <div
            class="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
        >
            <div class="relative z-10">
                <div class="max-w-5xl">
                    <div class="space-y-7">
                        <div
                            class="scribble-note motion-rise inline-flex items-center gap-2 px-4 py-2 text-sm text-secondary"
                            data-aos="fade-up"
                            data-aos-delay="0"
                            data-aos-duration="600"
                        >
                            <span class="hand-arrow">↳</span>
                            hello! I’m James — a full-stack web developer
                        </div>

                        <h1
                            class="hero-title motion-rise motion-rise-delay-1 text-6xl md:text-8xl lg:text-9xl font-semibold text-primary leading-[0.82]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="600"
                        >
                            I make ideas
                            <span class="block mt-3 premium-gradient-text">work on the web.</span>
                        </h1>

                        <p
                            class="motion-rise motion-rise-delay-2 text-secondary dark:text-muted text-base md:text-lg max-w-2xl leading-8"
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="600"
                        >
                            From the first messy sketch to the final database query, I build useful,
                            friendly products with Laravel, Vue, and a healthy dose of curiosity.
                        </p>
                    </div>

                    <div
                        class="flex flex-col sm:flex-row sm:items-center gap-4 mt-9"
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="600"
                    >
                        <a href="#project">
                            <button
                                class="sketch-button motion-pill w-full px-8 py-3 text-sm font-semibold text-surface sm:w-auto md:text-base"
                            >
                                See what I’ve made →
                            </button>
                        </a>
                        <a
                            href="#contact"
                            class="paper-button motion-pill px-6 py-3 text-center text-sm font-semibold text-primary md:text-base"
                        >
                            Write me a note
                        </a>
                    </div>

                    <div
                        class="grid grid-cols-3 gap-3 mt-12 max-w-2xl"
                        data-aos="fade-up"
                        data-aos-delay="800"
                        data-aos-duration="600"
                    >
                        <div class="stat-note glass-panel p-4">
                            <div class="text-2xl font-semibold text-primary">2+</div>
                            <div class="text-xs text-muted">Years experience</div>
                        </div>
                        <div class="stat-note glass-panel p-4">
                            <div class="text-2xl font-semibold text-primary">10+</div>
                            <div class="text-xs text-muted">Projects shipped</div>
                        </div>
                        <div class="stat-note glass-panel p-4">
                            <div class="text-2xl font-semibold text-primary">Full</div>
                            <div class="text-xs text-muted">Stack delivery</div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="hero-sketch relative hidden min-h-[540px] lg:block"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="900"
            >
                <div class="tape tape-top" aria-hidden="true"></div>
                <div class="glass-panel magnetic-card motion-surface code-note absolute inset-x-4 top-8 p-6">
                    <div class="flex items-center gap-2 border-b-2 border-dashed border-secondary/20 pb-4">
                        <span class="text-xl text-accent">✿</span>
                        <span class="ml-auto text-xs text-muted">a note from my desk</span>
                    </div>
                    <div class="mt-5 space-y-3 text-lg">
                        <p class="text-muted">things I care about:</p>
                        <p class="pl-4 text-secondary">✓ thoughtful interfaces</p>
                        <p class="pl-4 text-secondary">✓ dependable backends</p>
                        <p class="pl-4 text-secondary">✓ people using them happily</p>
                        <p class="mt-5 text-accent">— James ✌</p>
                    </div>
                </div>

                <div class="float-slow glass-panel stack-note absolute bottom-20 left-0 p-4">
                    <p class="text-xs text-muted">my everyday toolkit</p>
                    <div class="mt-3 flex flex-wrap gap-2">
                        <span
                            v-for="(tech, index) in techStacks.slice(0, 6)"
                            :key="index"
                            class="skill-chip px-3 py-1 text-xs text-secondary"
                        >
                            {{ tech.name }}
                        </span>
                    </div>
                </div>

                <div class="float-slower glass-panel tiny-note absolute bottom-2 right-8 p-4">
                    <p class="text-xs text-muted">currently</p>
                    <p class="mt-1 text-lg font-semibold text-primary">building good things ✦</p>
                </div>
            </div>
        </div>

        <div class="scroll-note absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
            keep scrolling ↓
        </div>
    </section>
</template>
