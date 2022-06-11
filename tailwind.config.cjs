module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				riseDarkBlue: '#03122F',
				riseLightBlue: '#093893',

				riseDarkGold: '#956D2C',
				riseLightGold: '#DACDBA',
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
