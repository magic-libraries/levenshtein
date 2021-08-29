export const min = (d0, d1, d2, bx, ay) => {
  if (d0 < d1 || d2 < d1) {
    if (d0 > d2) {
      return d2 + 1
    } else {
      return d0 + 1
    }
  } else if (bx === ay) {
    return d1
  } else {
    return d1 + 1
  }
}

export const code = (a, b) => a.charCodeAt(b)

export const levenshtein = (a = '', b = '') => {
  if (a === b) {
    return 0
  }

  if (a.length > b.length) {
    const tmp = a
    a = b
    b = tmp
  }

  let la = a.length
  let lb = b.length

  while (la > 0 && code(a, la - 1) === code(b, lb - 1)) {
    la--
    lb--
  }

  let offset = 0

  while (offset < la && code(a, offset) === code(b, offset)) {
    offset++
  }

  la -= offset
  lb -= offset

  if (la === 0 || lb < 3) {
    return lb
  }

  let x = 0
  let d0
  let d1
  let d2
  let d3
  let dd
  let dy

  const vector = []

  for (let y = 0; y < la; y++) {
    vector.push(y + 1)
    vector.push(code(a, offset + y))
  }

  const len = vector.length - 1

  for (; x < lb - 3; ) {
    const bx0 = code(b, offset + (d0 = x))
    const bx1 = code(b, offset + (d1 = x + 1))
    const bx2 = code(b, offset + (d2 = x + 2))
    const bx3 = code(b, offset + (d3 = x + 3))
    dd = x += 4

    for (let y = 0; y < len; y += 2) {
      const dy = vector[y]
      const ay = vector[y + 1]
      d0 = min(dy, d0, d1, bx0, ay)
      d1 = min(d0, d1, d2, bx1, ay)
      d2 = min(d1, d2, d3, bx2, ay)
      dd = min(d2, d3, dd, bx3, ay)
      vector[y] = dd
      d3 = d2
      d2 = d1
      d1 = d0
      d0 = dy
    }
  }

  for (; x < lb; ) {
    const bx0 = code(b, offset + (d0 = x))
    dd = ++x
    for (let y = 0; y < len; y += 2) {
      dy = vector[y]
      vector[y] = dd = min(dy, d0, dd, bx0, vector[y + 1])
      d0 = dy
    }
  }

  return dd
}

export default levenshtein
