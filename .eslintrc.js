module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:import/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		wp: true,
		jQuery: true
	},
	parser: '@babel/eslint-parser',
	parserOptions: {
		sourceType: 'module',
		allowImportExportEverywhere: true,
		requireConfigFile: false
	},
	plugins: ['import', 'vue'],
	rules: {
		'no-param-reassign': 'off',
		semi: ['error', 'always'],
		'no-console': 'off',
		'no-inner-declarations': 'warn',
		'no-mixed-spaces-and-tabs': 'off',
		'no-undef': 'off',
		'no-unused-vars': 'off',
		'import/no-unresolved': 'warn',
		'import/named': 'error',
		'import/namespace': 'error',
		'import/default': 'error',
		'import/export': 'error',
		'no-empty': 'off'
	},
	settings: {
		'import/resolver': {
			alias: [
				['Assets', './web/wp-content/themes/global-theme/assets'],
				['NodeModules', './node_modules'],
				['Templates', './web/wp-content/themes/global-theme/views']
			]
		}
	}
};
