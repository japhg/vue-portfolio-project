<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { motion } from 'motion-v'
import quickReplies from '@/data/chatbot/quick-replies.json'

const isOpen = ref(false)
const isTyping = ref(false)
const messages = ref([
    {
        id: 1,
        text: "Hi! I'm James. How can I help you? Well, if you have no idea now, I can tell you all about my work, experience, and projects. What would you like to know about me?",
        isBot: true,
        timestamp: new Date(),
    },
])

const addMessage = (text: string, isBot: boolean = false) => {
    const newMessage = {
        id: messages.value.length + 1,
        text,
        isBot,
        timestamp: new Date(),
    }
    messages.value.push(newMessage)
    scrollToBottom()
}

const scrollToBottom = () => {
    nextTick(() => {
        const messagesContainer = document.querySelector('.messages-container')
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight
        }
    })
}

const handleQuickReply = (reply: string) => {
    addMessage(reply, false)

    isTyping.value = true

    setTimeout(() => {
        isTyping.value = false
        let botResponse = ''
        switch (reply) {
            case 'Tell me about your experience':
                botResponse =
                    "I'm a Full-Stack Web Developer with 2+ years of experience. Here's my journey:\n\n**Current Role (March 2024 - Present):**\n• Independent Full-Stack Developer\n• Working on major projects like MTAP Systems, UpmeWorks, TheCEplace\n• Currently developing QuickJuan POS and FoodCosting system\n\n**Previous Experience:**\n• Freelance Developer on Upwork (March-May 2024)\n• Web Developer/IT Support at PCN Promopro Inc. (Sept 2023-March 2024)\n• Led development of HRMS, Training, and Clinic Management Systems\n\nI have a Bachelor's degree in Information Technology, Major in Information Management from Bestlink College of the Philippines."
                break
            case 'What technologies do you use?':
                botResponse =
                    "Here's my actual tech stack:\n\n**Frontend:**\n• Vue.js & Nuxt.js\n• TypeScript\n• TailwindCSS & Bootstrap\n• HTML5, CSS3\n\n**Backend:**\n• PHP & Laravel\n• MySQL\n• REST API\n\n**Tools & Frameworks:**\n• Git & GitHub\n• Inertia.js\n• Filament & Nova\n• Firebase\n• AJAX & jQuery\n\nI focus on modern PHP/Laravel development with Vue.js and Inertia.js so that I can seamlessly integrate these two frameworks."
                break
            case 'How can I contact you?':
                botResponse =
                    "You can reach me through:\n\n• **Contact Section:**\n Check the 'Get In Touch' section below or direct email me in jpgomera19@gmail.com\n\n• **Social Media:** \nLinkedIn, GitHub, and other platforms in the footer\n\n• **Portfolio:**\n This website showcases my work!\n\nI'm always open to discussing new opportunities and/or collaborations. Feel free to reach out!"
                break
            case 'Show me your projects':
                botResponse =
                    'Here are my key projects:\n\n**Current Projects:**\n• FoodCosting - Food Business software platform (foodcosting.storeko.online)\n• UpmeWorks - Business software platform (upmeworks.com)\n• MTAP Systems - Healthcare assessment platform (mtapsystems.com)\n• QuickJuan POS - Point of Sale system (in development)\n\n**PCN Promopro Projects:**\n• **HR Management System** - Employee management platform\n• **Clinic Management System** - Healthcare management solution\n• **Training Management System** - Employee training platform\n• **Job Portal** - Recruitment platform\n\nEach project showcases different aspects of my full-stack development skills. Check out the projects section for live demos!'
                break
            case "What's your background?":
                botResponse =
                    "Here's my background:\n\n• **Education:** Bachelor's degree in Information Technology, major in Information Management from Bestlink College of the Philippines\n• **Experience:** 2+ years in full-stack web development\n• **Specialization:** PHP/Laravel backend with Vue.js frontend\n• **Location:** I am currently based in the Quezon City, Philippines\n• **Approach:** Passionate about creating elegant solutions to complex problems\n\nI bring both theoretical knowledge and practical experience to my development work, focusing on modern web technologies and user-friendly applications."
                break
            case 'Tell me about your skills':
                botResponse =
                    'Here are my key skills:\n\n**Technical Skills:**\n• Full-stack web development (2+ years)\n• PHP & Laravel backend development\n• Vue.js & Nuxt.js frontend development\n• MySQL database design and management\n• REST API development\n• Git version control\n• Responsive web design\n\n**Tools & Frameworks:**\n• Inertia.js for SPA development\n• Filament & Nova admin panels\n• TailwindCSS & Bootstrap for styling\n• AJAX & jQuery for dynamic interactions\n\n**Soft Skills:**\n• Problem-solving and analytical thinking\n• Team-collaboration\n• Continuous learning and adaptation'
                break
            default:
                botResponse =
                    "That's a great question! I'd be happy to help you learn more about my work and experience. Feel free to explore the different sections of this portfolio, or ask me about specific topics like my projects, skills, or background!"
        }
        addMessage(botResponse, true)
    }, 1500 + Math.random() * 1000)
}

const toggleChat = () => {
    isOpen.value = !isOpen.value
}

const chatVariants = {
    closed: {
        y: 100,
        opacity: 0,
        scale: 0.8,
    },
    open: {
        y: 0,
        opacity: 1,
        scale: 1,
    },
}

const messageVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
}
</script>

<template>
    <!-- Chatbot Toggle Button -->
    <motion.button
        @click="toggleChat"
        class="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-secondary/10 bg-primary text-surface transition-colors duration-200 hover:bg-primary/85 dark:bg-secondary dark:text-background"
        :class="{ 'rotate-45': isOpen }"
        :whileHover="{ scale: 1.04 }"
    >
        <svg
            v-if="!isOpen"
            class="w-5 h-5 z-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
        </svg>
        <svg v-else class="w-5 h-5 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </motion.button>

    <!-- Chatbot Window -->
    <motion.div
        v-if="isOpen"
        :variants="chatVariants"
        initial="closed"
        animate="open"
        exit="closed"
        :transition="{ type: 'spring', stiffness: 300, damping: 30 }"
        class="fixed bottom-24 right-0 md:right-6 top-2 md:top-auto mx-2 z-50 w-auto md:w-96 h-[500px] bg-surface dark:bg-surface rounded-lg border border-secondary/10 flex flex-col overflow-hidden"
    >
        <!-- Header -->
        <div
            class="border-b border-secondary/10 bg-surface p-4 flex items-center gap-3 relative"
        >
            <div class="w-10 h-10 bg-background rounded-full flex items-center justify-center">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                    />
                </svg>
            </div>
            <div class="flex-1">
                <h3 class="font-semibold text-base">James's Chatbot</h3>
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-primary dark:bg-secondary rounded-full"></div>
                    <p class="text-xs opacity-90">Online • Ready to help</p>
                </div>
            </div>
            <button
                @click="toggleChat"
                class="w-8 h-8 rounded-full border border-secondary/10 flex items-center justify-center hover:bg-primary/5 dark:hover:bg-secondary/10 transition-colors"
            >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>

        <!-- Messages -->
        <div class="flex-1 p-4 overflow-y-auto space-y-4 messages-container">
            <motion.div
                v-for="message in messages"
                :key="message.id"
                :variants="messageVariants"
                initial="hidden"
                animate="visible"
                :transition="{ type: 'spring', stiffness: 400, damping: 25 }"
                class="flex"
                :class="message.isBot ? 'justify-start' : 'justify-end'"
            >
                <div
                    class="flex items-end gap-2 max-w-[85%]"
                    :class="message.isBot ? 'flex-row' : 'flex-row-reverse'"
                >
                    <!-- Avatar for bot messages -->
                    <div
                        v-if="message.isBot"
                        class="w-8 h-8 bg-background rounded-full flex items-center justify-center flex-shrink-0"
                    >
                        <svg class="w-4 h-4 text-primary dark:text-secondary" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            />
                        </svg>
                    </div>

                    <!-- Message bubble -->
                    <div
                        class="px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                        :class="
                            message.isBot
                                ? 'bg-background dark:bg-background text-primary dark:text-secondary rounded-bl-md'
                                : 'bg-primary dark:bg-secondary text-surface dark:text-background rounded-br-md'
                        "
                    >
                        {{ message.text }}
                    </div>

                    <!-- User avatar placeholder -->
                    <div
                        v-if="!message.isBot"
                        class="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                        <svg
                            class="w-4 h-4 text-gray-600 dark:text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                            />
                        </svg>
                    </div>
                </div>
            </motion.div>

            <!-- Typing Indicator -->
            <motion.div
                v-if="isTyping"
                :variants="messageVariants"
                initial="hidden"
                animate="visible"
                class="flex justify-start"
            >
                <div class="flex items-end gap-2">
                    <div
                        class="w-8 h-8 bg-background rounded-full flex items-center justify-center"
                    >
                        <svg class="w-4 h-4 text-primary dark:text-secondary" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            />
                        </svg>
                    </div>
                    <div class="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-2xl rounded-bl-md">
                        <div class="flex space-x-1">
                            <div
                                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style="animation-delay: 0ms"
                            ></div>
                            <div
                                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style="animation-delay: 150ms"
                            ></div>
                            <div
                                class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style="animation-delay: 300ms"
                            ></div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        <!-- Quick Replies -->
        <div
            class="p-4 border-t border-secondary/10 bg-background dark:bg-background"
        >
            <p class="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">
                Quick questions:
            </p>
            <div class="grid grid-cols-2 gap-2">
                <button
                    v-for="reply in quickReplies"
                    :key="reply"
                    @click="handleQuickReply(reply)"
                    class="px-3 py-2 text-xs bg-surface dark:bg-surface text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-surface dark:hover:bg-secondary dark:hover:text-background transition-colors duration-200 border border-gray-200 dark:border-gray-700"
                >
                    {{ reply }}
                </button>
            </div>
        </div>
    </motion.div>
</template>

<style scoped>
.messages-container::-webkit-scrollbar {
    width: 6px;
}

.messages-container::-webkit-scrollbar-track {
    background: transparent;
}

.messages-container::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
}

.dark .messages-container::-webkit-scrollbar-thumb {
    background: #4b5563;
}

.messages-container::-webkit-scrollbar-thumb:hover {
    background: #9ca3af;
}

.dark .messages-container::-webkit-scrollbar-thumb:hover {
    background: #6b7280;
}

.message-bubble {
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(10px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

</style>
