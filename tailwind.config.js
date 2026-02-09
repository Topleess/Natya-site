/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    black: '#111111',
                    mint: '#00D2A0',
                    yellow: '#FDCB58',
                    grey: '#2A2A2A',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Syne', 'sans-serif'],
            },
        }
    },
    plugins: [],
}
