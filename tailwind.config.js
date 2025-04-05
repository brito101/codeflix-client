/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {},
    plugins: [
        plugin(({ addUtilities }) => {
            addUtilities({
                /* Chrome, Safari and Opera */
                ".scrollbar-hidden::-webkit-scrollbar": {
                    display: "none",
                },

                ".scrollbar-hidden": {
                    "scrollbar-width": "none" /* Firefox */,
                    "-ms-overflow-style": "none" /* IE and Edge */,
                },
            })
        }),
    ],
};