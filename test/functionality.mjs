import { levenshtein } from '../src/index.mjs'

export default [
  { fn: levenshtein('a', 'a'), expect: 0 },
  { fn: levenshtein('kitten', 'kitten'), expect: 0 },
  { fn: levenshtein('因為我是英國人', '因為我是英國人'), expect: 0 },
  { fn: levenshtein('a', 'b'), expect: 1 },
  { fn: levenshtein('ab', 'ac'), expect: 1 },
  { fn: levenshtein('ac', 'bc'), expect: 1 },
  { fn: levenshtein('abc', 'axc'), expect: 1 },
  { fn: levenshtein('kitten', 'sitting'), expect: 3 },
  { fn: levenshtein('xabxcdxxefxgx', '1ab2cd34ef5g6'), expect: 6 },
  { fn: levenshtein('cat', 'cow'), expect: 2 },
  { fn: levenshtein('xabxcdxxefxgx', 'abcdefg'), expect: 6 },
  { fn: levenshtein('javawasneat', 'scalaisgreat'), expect: 7 },
  { fn: levenshtein('example', 'samples'), expect: 3 },
  { fn: levenshtein('sturgeon', 'urgently'), expect: 6 },
  { fn: levenshtein('levenshtein', 'frankenstein'), expect: 6 },
  { fn: levenshtein('distance', 'difference'), expect: 5 },
  { fn: levenshtein('因為我是中國人所以我會說中文', '因為我是英國人所以我會說英文'), expect: 2 },
]
