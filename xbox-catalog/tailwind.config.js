const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // fontFamily: ['helv','"Segoe UI"', 'ui-sans-serif', 'system-ui'],
            colors: {
                emerald: colors.emerald,
                green: {
                    DEFAULT: '#107c10',
                    dark: '#054b16',
                },
                'warm-gray': colors.gray,
            },
            gridTemplateColumns: {
                'auto-fit-md': 'repeat(auto-fit, minmax(0, 150px))',
                'auto-fit-sm': 'repeat(auto-fit, minmax(0, 100px))',
                'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
            },
            gridTemplateRows: {
                'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
                'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
            },
            screens: {
                'tablet': '640px',
                'laptop': '1024px',
                'desktop': '1280px',
                'sm': '200px',
            },
        }
    },
}
