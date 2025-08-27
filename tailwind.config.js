import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            ...colors,
            transparent: 'transparent',
            current: 'currentColor',

            // Semantic theme tokens powered by CSS variables
            background: 'rgb(var(--color-background) / <alpha-value>)',
            surface: 'rgb(var(--color-surface) / <alpha-value>)',
            primary: 'rgb(var(--color-primary) / <alpha-value>)',
            secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
            mint: 'rgb(var(--color-mint) / <alpha-value>)',
            accent: 'rgb(var(--color-accent) / <alpha-value>)',
            highlight: 'rgb(var(--color-highlight) / <alpha-value>)',
            muted: 'rgb(var(--color-muted) / <alpha-value>)',
        },
        extend: {
            backgroundImage: {
                'gradient-primary': "url('/images/gradient.png')",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                archivo: ['Archivo'],
                poppins: ['Poppins'],
                roboto: ['Roboto'],
            },
        },
    },
    plugins: [],
}
