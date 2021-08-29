# ${state.title}

${state.description}

<GitBadges>@magic-libraries/levenshtein</GitBadges>

### installation

`npm install --save-exact magic-libraries/levenshtein`

### usage

this module only exports one function for end users:

```
import { levenshtein } from '@magic-libraries/levenshtein'

levenshtein('a', 'a')
// 0

levenshtein('a', 'b')
// 1
```

### source

the source for this page is in the
[example directory](https://github.com/magic-libraries/levenshtein/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
