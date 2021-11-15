module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			container: {
				center: true,
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active', 'visited'],
			fontStyle: ['active'],
			textColor: ['hover'],
			transform: ['active'],
			translate: ['active'],
			transitionProperty: ['active'],
			transitionDuration: ['active'],
			cursor: ['hover'],
		},
	},
	plugins: [],
};
