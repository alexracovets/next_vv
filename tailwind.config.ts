import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				'roboto': ["var(--font-roboto)"],
				'spectral': ["var(--font-spectral)"],
				'playfair': ["var(--font-playfair)"]
			},
			colors: {
				'background': '#0d0d0d',
				'regal-bg-logo': '#00000080',
				'regal-bg-point':'#0009',
				'regal-white': '#F8F8FF',
				'regal-beige': '#EBD7B2',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		tailwindcssAnimate
	],
};
export default config;
