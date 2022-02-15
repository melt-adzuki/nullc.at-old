module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:vue/essential",
		"@vue/airbnb",
	],
	settings: {
		"import/resolver": {
			alias: {
				map: [
					["@", "."],
					["~", "."],
				],
				extensions: [".vue", ".ts", ".js"],
			},
		},
	},
	plugins: [
		"pug",
	],
	// add your custom rules here
	rules: {
		indent: [
			"error",
			"tab",
		],
		"vue/html-indent": [
			"error",
			"tab",
		],
		"no-tabs": [
			"error",
			{
				allowIndentationTabs: true,
			},
		],
		quotes: [
			"error",
			"double",
		],
		semi: [
			"error",
			"never",
		],
		"brace-style": [
			"error",
			"allman",
		],
		"max-len": 0,
		"class-methods-use-this": 0,
	},
}
