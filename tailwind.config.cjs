module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				riseDarkBlue: '#05122E',
				riseLightBlue: '#093893',

				riseDarkGold: '#956D2C',
				riseLightGold: '#DACDBA',

				sponsorGold: '#FCF3BD',
				sponsorSilver: '#FFFFFF',
				sponsorBronze: '#E97E00',
				sponsorPartners: '#266AEE',
			},
			fontFamily: {
				body: ['Roboto', 'sans-serif'],
			},
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
			  },
			  keyframes: {
				marquee: {
				  '0%': { transform: 'translateX(0%)' },
				  '100%': { transform: 'translateX(-63%)' },
				},
				// marquee2: {
				//   '0%': { transform: 'translateX(100%)' },
				//   '100%': { transform: 'translateX(0%)' },
				// },
			  },
		},
	},
	plugins: [],
}
