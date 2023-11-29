const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'rotate': 'rotate 10s infinite linear'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg,var(--tw-gradient-stops))'
			},
			colors: {
				theme: colors.slate,
				brand: colors.emerald["400"],
				accent: colors.yellow['400']
			},
			fontFamily: {
				'sans': ['Ubuntu', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				rotate: {
					'0%': {filter: 'hue-rotate(0deg)', transform: 'rotate(0deg)'},
					'100%': {filter: 'hue-rotate(360deg)', transform: 'rotate(360deg)'}
				}
			}
		},
	},
	plugins: [],
}
