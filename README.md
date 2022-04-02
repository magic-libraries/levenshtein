## @magic-libraries/levenshtein

levenshtein string distance calculation for
[@magic](https://magic.github.io/core)

[html-docs](https://magic-libraries.github.io/levenshtein/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

#### <a name="install"></a>installation
```bash
npm install --save-exact @magic-libraries/levenshtein
```

#### <a name="usage"></a>usage
in a page/component, just use the lib.levenshtein function.

```javascript
import { levenshtein } from '@magic-libraries/levenshtein'

levenshtein('a', 'a')
// 0

levenshtein('a', 'b')
// 1
```

#### changelog

##### 0.0.1
first release

##### 0.0.2
update dependencies

[npm-image]: https://img.shields.io/npm/v/@magic-libraries/levenshtein.svg
[npm-url]: https://www.npmjs.com/package/@magic-libraries/levenshtein
[travis-image]: https://img.shields.io/travis/com/magic-libraries/levenshtein/master
[travis-url]: https://travis-ci.com/magic-libraries/levenshtein
[appveyor-image]: https://img.shields.io/appveyor/ci/magiclibraries/levenshtein/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magiclibraries/levenshtein/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-libraries/levenshtein/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-libraries/levenshtein
[greenkeeper-image]: https://badges.greenkeeper.io/magic-libraries/levenshtein.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-libraries/levenshtein.svg
[snyk-image]: https://snyk.io/test/github/magic-libraries/levenshtein/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-libraries/levenshtein
