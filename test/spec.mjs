import { is } from '@magic/test'

import levenshteinDefault, { levenshtein, min, code } from '../src/index.mjs'

export default [
  { fn: () => levenshteinDefault, expect: is.fn, info: 'levenshtein default export is a function' },
  {
    fn: () => levenshteinDefault.toString(),
    expect: levenshtein.toString(),
    info: 'levenshtein default and named exports are equal',
  },
  { fn: () => levenshtein, expect: is.fn, info: 'levenshtein named export is a function' },
  { fn: () => min, expect: is.fn, info: 'levenshtein.min is a function' },
  { fn: () => code, expect: is.fn, info: 'levenshtein.code is a function' },
]
