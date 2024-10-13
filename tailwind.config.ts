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
				'playfair': ["var(--font-playfair)"],
				'lato': ["var(--font-lato)"]
			},
			colors: {
				'background': '#0d0d0d',
				'regal-bg-logo': '#00000080',
				'regal-bg-point': '#0009',
				'regal-white': '#F8F8FF',
				'regal-black': '#000000',
				'regal-beige': '#EBD7B2',
				'regal-green': '#247616'
			},
			boxShadow: {
				'btn': '0 0 2rem #247616',
				'mono': '0 0 2rem #7474748c'
			}
		}
	},
	plugins: [
		tailwindcssAnimate
	],
};
export default config;
