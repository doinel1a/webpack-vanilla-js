// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	plugins: [
		'prettier',
		'import',
		'simple-import-sort',
		'promise',
		'sonarjs',
		'unicorn'
	],
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:promise/recommended',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		// base
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		// end

		// prettier
		'arrow-body-style': 'off',
		'prefer-arrow-callback': 'off',
		'prettier/prettier': [
			'error',
			{
				printWidth: 80,
				tabWidth: 4,
				useTabs: true,
				semi: true,
				singleQuote: true,
				jsxSingleQuote: true,
				trailingComma: 'none',
				bracketSpacing: true,
				bracketSameLine: false,
				arrowParens: 'always',
				endOfLine: 'lf'
			}
		],
		// end prettier

		// simple-import-sort
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error'
		// end simple-import-sort
	}
};
