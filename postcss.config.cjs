module.exports = {
	plugins: {
		tailwindcss: {},
		//cssnano: {},
		'postcss-preset-env': {
			autoprefixer: true,
			browsers: [
				"iOS >= 16.3",
				"last 5 ChromeAndroid versions",
				"last 5 Chrome versions",
				"last 5 Opera versions",
				"last 5 Safari versions",
				"last 5 Firefox versions",
				"not dead"
			]
		},
	}
}