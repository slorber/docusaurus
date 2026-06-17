/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import {defineConfig} from 'oxlint';

const OFF = 'off';
const WARNING = 'warn';
const ERROR = 'error';

// Prevent importing lodash, usually for browser bundle size reasons
const LodashImportPatterns = ['lodash', 'lodash.**', 'lodash/**'];

// Prevent importing content plugins, usually for coupling reasons
const ContentPluginsImportPatterns = [
  '@docusaurus/plugin-content-blog',
  '@docusaurus/plugin-content-blog/**',
  // TODO fix theme-common => docs dependency issue
  // '@docusaurus/plugin-content-docs',
  // '@docusaurus/plugin-content-docs/**',
  '@docusaurus/plugin-content-pages',
  '@docusaurus/plugin-content-pages/**',
];

const RestrictedProperties = [
  ...[
    // TODO: TS doesn't make Boolean a narrowing function yet,
    // so filter(Boolean) is problematic type-wise
    // ['compact', 'Array#filter(Boolean)'],
    ['concat', 'Array#concat'],
    ['drop', 'Array#slice(n)'],
    ['dropRight', 'Array#slice(0, -n)'],
    ['fill', 'Array#fill'],
    ['filter', 'Array#filter'],
    ['find', 'Array#find'],
    ['findIndex', 'Array#findIndex'],
    ['first', 'foo[0]'],
    ['flatten', 'Array#flat'],
    ['flattenDeep', 'Array#flat(Infinity)'],
    ['flatMap', 'Array#flatMap'],
    ['fromPairs', 'Object.fromEntries'],
    ['head', 'foo[0]'],
    ['indexOf', 'Array#indexOf'],
    ['initial', 'Array#slice(0, -1)'],
    ['join', 'Array#join'],
    // Unfortunately there's no great alternative to _.last yet
    // Candidates: foo.slice(-1)[0]; foo[foo.length - 1]
    // Array#at is ES2022; could replace _.nth as well
    // ['last'],
    ['map', 'Array#map'],
    ['reduce', 'Array#reduce'],
    ['reverse', 'Array#reverse'],
    ['slice', 'Array#slice'],
    ['take', 'Array#slice(0, n)'],
    ['takeRight', 'Array#slice(-n)'],
    ['tail', 'Array#slice(1)'],
  ].map(([property, alternative]) => ({
    object: '_',
    property,
    message: `Use ${alternative} instead.`,
  })),
  ...[
    'readdirSync',
    'readFileSync',
    'statSync',
    'lstatSync',
    'existsSync',
    'pathExistsSync',
    'realpathSync',
    'mkdirSync',
    'mkdirpSync',
    'mkdirsSync',
    'writeFileSync',
    'writeJsonSync',
    'outputFileSync',
    'outputJsonSync',
    'moveSync',
    'copySync',
    'copyFileSync',
    'ensureFileSync',
    'ensureDirSync',
    'ensureLinkSync',
    'ensureSymlinkSync',
    'unlinkSync',
    'removeSync',
    'emptyDirSync',
  ].map((property) => ({
    object: 'fs',
    property,
    message: 'Do not use sync fs methods.',
  })),
];

const ReactCompilerRules = {
  // `rules-of-hooks` and `exhaustive-deps` stay errors, while the newer
  // React Compiler diagnostics start as warnings for gradual adoption.
  'react-hooks/rules-of-hooks': ERROR,
  'react-hooks/exhaustive-deps': ERROR,
  'react-hooks/component-hook-factories': WARNING,
  'react-hooks/config': WARNING,
  'react-hooks/error-boundaries': WARNING,
  'react-hooks/gating': WARNING,
  'react-hooks/globals': WARNING,
  'react-hooks/immutability': WARNING,
  'react-hooks/incompatible-library': WARNING,
  'react-hooks/preserve-manual-memoization': WARNING,
  'react-hooks/purity': WARNING,
  'react-hooks/refs': WARNING,
  'react-hooks/set-state-in-effect': WARNING,
  'react-hooks/set-state-in-render': WARNING,
  'react-hooks/static-components': WARNING,
  'react-hooks/unsupported-syntax': WARNING,
  'react-hooks/use-memo': WARNING,
};

export default defineConfig({
  // Oxlint defaults to correctness. Enable widely used, low-maintenance
  // categories that focus on bugs and suspicious antipatterns, not formatting.
  categories: {
    correctness: ERROR,
    suspicious: WARNING,
    perf: WARNING,
  },

  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'oxc',
    'import',
    'jsx-a11y',
    'react',
    'vitest',
  ],

  jsPlugins: [
    {name: 'header', specifier: 'eslint-plugin-header'},
    {name: '@docusaurus', specifier: '@docusaurus/eslint-plugin'},
    // Keep the official React Compiler diagnostics, which are currently
    // distributed through eslint-plugin-react-hooks.
    {name: 'react-hooks', specifier: 'eslint-plugin-react-hooks'},
    {name: 'eslint-plugin', specifier: 'eslint-plugin-eslint-plugin'},
    {name: 'regexp', specifier: 'eslint-plugin-regexp'},
  ],

  ignorePatterns: [
    '**/.docusaurus/**',
    '**/__fixtures__/**',
    '__mocks__',
    'dist',
    'node_modules',
    '.yarn',
    '.history',
    'build',
    'coverage',
    'examples/',
    'packages/lqip-loader/lib/*',
    'packages/docusaurus/lib/*',
    'packages/docusaurus-*/lib/*',
    'packages/eslint-plugin/lib/',
    'packages/stylelint-copyright/lib/',
    'packages/create-docusaurus/lib/*',
    'packages/create-docusaurus/templates/facebook',
    'website/i18n',
    'website/_dogfooding/_swizzle_theme_tests',
    'website/_dogfooding/_asset-tests/badSyntax.js',
    'packages/docusaurus-plugin-ideal-image/src/theme/IdealImageLegacy',
  ],

  env: {
    browser: true,
    node: true,
    es2022: true,
  },

  globals: {
    JSX: 'readonly',
  },

  settings: {
    react: {
      version: '19',
    },
  },

  rules: {
    'header/header': [
      ERROR,
      'block',
      [
        '*',
        ' * Copyright (c) Facebook, Inc. and its affiliates.',
        ' *',
        ' * This source code is licensed under the MIT license found in the',
        ' * LICENSE file in the root directory of this source tree.',
        ' ',
      ],
    ],

    'array-callback-return': WARNING,
    camelcase: WARNING,
    'class-methods-use-this': OFF,
    curly: [WARNING, 'all'],
    'global-require': OFF,
    'no-alert': WARNING,
    'lines-between-class-members': OFF,
    'max-classes-per-file': OFF,
    'max-len': [
      WARNING,
      {
        code: 100000,
        tabWidth: 2,
        comments: 80,
        ignoreUrls: true,
        ignorePattern: '(eslint-disable|oxlint-disable|@)',
      },
    ],
    'arrow-body-style': OFF,
    'no-await-in-loop': OFF,
    'no-case-declarations': WARNING,
    'no-console': OFF,
    'no-constant-binary-expression': ERROR,
    'no-continue': OFF,
    'no-control-regex': WARNING,
    'no-else-return': OFF,
    'no-empty': [WARNING, {allowEmptyCatch: true}],
    'no-lonely-if': WARNING,
    'no-nested-ternary': WARNING,
    'no-param-reassign': [WARNING, {props: false}],
    'no-prototype-builtins': WARNING,
    'no-restricted-exports': OFF,
    'no-restricted-properties': [ERROR, ...RestrictedProperties],
    'no-restricted-syntax': [
      WARNING,
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      {
        selector: 'ExportAllDeclaration',
        message:
          "Export all does't work well if imported in ESM due to how they are transpiled, and they can also lead to unexpected exposure of internal methods.",
      },
      ...['path', 'fs-extra', 'webpack', 'lodash'].map((moduleName) => ({
        selector: `ImportDeclaration[importKind=value]:has(Literal[value=${moduleName}]) > ImportSpecifier[importKind=value]`,
        message:
          'Default-import this, both for readability and interoperability with ESM',
      })),
    ],
    'no-template-curly-in-string': WARNING,
    'no-unused-expressions': OFF,
    'no-useless-escape': WARNING,
    'no-void': [ERROR, {allowAsStatement: true}],
    'prefer-destructuring': OFF,
    'prefer-named-capture-group': WARNING,
    'prefer-template': WARNING,
    yoda: WARNING,

    'import/extensions': OFF,
    'import/no-unresolved': OFF,
    'import/order': [
      WARNING,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
        ],
        pathGroups: [
          {
            pattern: '*.+(css|sass|less|scss|pcss|styl)',
            group: 'unknown',
            patternOptions: {matchBase: true},
            position: 'after',
          },
          {pattern: 'vitest', group: 'builtin', position: 'before'},
          {pattern: 'react', group: 'builtin', position: 'before'},
          {pattern: 'react-dom', group: 'builtin', position: 'before'},
          {pattern: 'react-dom/**', group: 'builtin', position: 'before'},
          {pattern: 'stream', group: 'builtin', position: 'before'},
          {pattern: 'fs-extra', group: 'builtin'},
          {pattern: 'lodash', group: 'external', position: 'before'},
          {pattern: 'clsx', group: 'external', position: 'before'},
          {pattern: '@theme/**', group: 'internal'},
          {pattern: '@site/**', group: 'internal'},
          {pattern: '@theme-init/**', group: 'internal'},
          {pattern: '@theme-original/**', group: 'internal'},
        ],
        pathGroupsExcludedImportTypes: [],
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': OFF,

    'vitest/consistent-test-it': WARNING,
    'vitest/expect-expect': OFF,
    'vitest/no-large-snapshots': [
      WARNING,
      {maxSize: Number.MAX_SAFE_INTEGER, inlineMaxSize: 50},
    ],
    'vitest/no-test-return-statement': ERROR,
    'vitest/prefer-expect-resolves': WARNING,
    'vitest/prefer-lowercase-title': [WARNING, {ignore: ['describe']}],
    'vitest/prefer-spy-on': WARNING,
    'vitest/prefer-to-be': OFF,
    'vitest/prefer-to-have-length': WARNING,
    'vitest/require-top-level-describe': ERROR,
    'vitest/valid-title': [
      ERROR,
      {
        mustNotMatch: {
          it: [
            '^should|\\.$',
            'Titles should not begin with "should" or end with a full-stop',
          ],
        },
      },
    ],

    'jsx-a11y/click-events-have-key-events': WARNING,
    'jsx-a11y/no-noninteractive-element-interactions': WARNING,
    'jsx-a11y/html-has-lang': OFF,

    'react/destructuring-assignment': OFF,
    'react/function-component-definition': [
      WARNING,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': OFF,
    'react/jsx-key': [ERROR, {checkFragmentShorthand: true}],
    'react/jsx-no-useless-fragment': [ERROR, {allowExpressions: true}],
    'react/jsx-props-no-spreading': OFF,
    'react/no-array-index-key': OFF,
    'react/no-unstable-nested-components': [WARNING, {allowAsProps: true}],
    'react/prefer-stateless-function': WARNING,
    'react/prop-types': OFF,
    'react/require-default-props': [ERROR, {ignoreFunctionalComponents: true}],
    'react/jsx-uses-react': OFF,
    'react/react-in-jsx-scope': OFF,
    ...ReactCompilerRules,

    '@typescript-eslint/no-empty-object-type': OFF,
    '@typescript-eslint/prefer-optional-chain': OFF,
    '@typescript-eslint/consistent-type-definitions': OFF,
    '@typescript-eslint/require-await': OFF,
    '@typescript-eslint/no-explicit-any': WARNING,
    '@typescript-eslint/no-unused-expressions': [
      WARNING,
      {allowTaggedTemplates: true, allowShortCircuit: true},
    ],
    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {'ts-expect-error': 'allow-with-description'},
    ],
    '@typescript-eslint/consistent-indexed-object-style': OFF,
    '@typescript-eslint/consistent-type-imports': [
      WARNING,
      {disallowTypeAnnotations: false},
    ],
    '@typescript-eslint/explicit-module-boundary-types': WARNING,
    '@typescript-eslint/method-signature-style': ERROR,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-empty-interface': [ERROR, {allowSingleExtends: true}],
    '@typescript-eslint/no-inferrable-types': OFF,
    '@typescript-eslint/no-namespace': [WARNING, {allowDeclarations: true}],
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      {functions: false, classes: false, variables: true},
    ],
    '@typescript-eslint/no-non-null-assertion': OFF,
    'no-redeclare': OFF,
    '@typescript-eslint/no-redeclare': ERROR,
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': ERROR,
    'no-unused-vars': OFF,
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    '@docusaurus/no-html-links': ERROR,
    '@docusaurus/prefer-docusaurus-heading': ERROR,
    '@docusaurus/no-untranslated-text': [
      WARNING,
      {
        ignoredStrings: [
          '·',
          '-',
          '—',
          '×',
          '​', // zwj: &#8203;
          '@',
          'WebContainers',
          'Twitter',
          'X',
          'GitHub',
          'Dev.to',
          '1.x',
        ],
      },
    ],
  },

  overrides: [
    {
      files: ['packages/docusaurus/src/client/**/*.{js,ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          ERROR,
          {
            patterns: [
              ...LodashImportPatterns,
              ...ContentPluginsImportPatterns,
              '**/../babel/**',
              '**/../server/**',
              '**/../commands/**',
              '**/../webpack/**',
            ],
          },
        ],
      },
    },
    {
      files: [
        'packages/docusaurus-theme-common/src/**/*.{js,ts,tsx}',
        'packages/docusaurus-utils-common/src/**/*.{js,ts,tsx}',
      ],
      rules: {
        'no-restricted-imports': [
          ERROR,
          {
            patterns: [...LodashImportPatterns, ...ContentPluginsImportPatterns],
          },
        ],
      },
    },
    {
      files: ['packages/docusaurus-*/src/theme/**/*.{js,ts,tsx}'],
      rules: {
        'no-restricted-imports': [
          ERROR,
          {
            patterns: [
              ...LodashImportPatterns,
              '../**',
              './**',
              '!./styles.module.css',
            ],
          },
        ],
      },
    },
    {
      files: [
        'packages/docusaurus-*/src/theme/**/*.{js,ts,tsx}',
        'packages/docusaurus/src/client/theme-fallback/**/*.{js,ts,tsx}',
      ],
      rules: {
        'import/no-named-export': ERROR,
      },
    },
    {
      files: ['packages/create-docusaurus/templates/**/*.{js,ts,tsx}'],
      rules: {
        'header/header': OFF,
        'global-require': OFF,
        '@typescript-eslint/no-require-imports': WARNING,
        '@typescript-eslint/no-var-requires': OFF,
        '@docusaurus/no-untranslated-text': OFF,
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': OFF,
      },
    },
    {
      files: ['*.{ts,tsx}'],
      rules: {
        'no-undef': OFF,
        'import/no-import-module-exports': OFF,
      },
    },
    {
      files: ['*.{js,mjs,cjs}'],
      rules: {
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/explicit-module-boundary-types': OFF,
      },
    },
    {
      files: [
        '**/__tests__/**',
        'packages/docusaurus-plugin-debug/**',
        'website/_dogfooding/**',
      ],
      rules: {
        '@docusaurus/no-untranslated-text': OFF,
      },
    },
    {
      files: [
        '*.test.{js,ts,tsx}',
        '**/__tests__/**',
        'admin/**',
        'test/**',
        'website/**',
        'packages/docusaurus-theme-common/removeThemeInternalReexport.mjs',
        'packages/docusaurus-theme-translations/update.mjs',
        'packages/docusaurus-theme-translations/src/utils.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': OFF,
      },
    },
    {
      files: ['website/**'],
      rules: {
        '@typescript-eslint/no-require-imports': OFF,
      },
    },
    {
      files: ['packages/eslint-plugin/**/*.{js,ts}'],
      rules: {
        'eslint-plugin/consistent-output': WARNING,
        'eslint-plugin/fixer-return': ERROR,
        'eslint-plugin/no-identical-tests': ERROR,
        'eslint-plugin/no-only-tests': ERROR,
        'eslint-plugin/no-unused-message-ids': ERROR,
        'eslint-plugin/prefer-message-ids': WARNING,
        'eslint-plugin/prefer-output-null': WARNING,
        'eslint-plugin/prefer-placeholders': WARNING,
        'eslint-plugin/require-meta-docs-description': WARNING,
        'eslint-plugin/require-meta-docs-url': WARNING,
        'eslint-plugin/require-meta-fixable': WARNING,
        'eslint-plugin/require-meta-has-suggestions': WARNING,
        'eslint-plugin/require-meta-schema': ERROR,
        'eslint-plugin/require-meta-type': ERROR,
      },
    },
    {
      files: [
        'packages/docusaurus-plugin-debug/**',
        'packages/docusaurus/src/**',
      ],
      rules: {
        '@docusaurus/prefer-docusaurus-heading': OFF,
      },
    },
  ],
});
