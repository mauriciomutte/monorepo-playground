module.exports = {
	env: {
		browser: true,
		es2020: true,
		jest: true,
		node: true,
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'import', 'no-only-tests'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			'eslint-import-resolver-typescript': true,
		},
	},
	rules: {
		indent: 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',

		'import/named': 'off',
		'import/first': 'warn',
		'import/namespace': ['error', { allowComputed: true }],
		'import/no-duplicates': 'error',
		'import/order': [
			'error',
			{
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '^@monorepo/',
						group: 'internal',
						position: 'before',
					},
				],
			},
		],
		'import/no-cycle': 'error',
		'import/no-self-import': 'warn',
		'import/extensions': ['off', 'never', { ts: 'never' }],

		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-only-tests/no-only-tests': 'error',
	},
};
