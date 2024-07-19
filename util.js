export function uuid () {
  return Array.from({ length: 36 }).map((_, i) => {
    if (i === 8 || i === 13 || i === 18 || i === 23) {
      return '-'
    } else if (i === 14) {
      return '4'
    } else if (i === 19) {
      return (Math.floor(Math.random() * 4) + 8).toString(16)
    } else {
      return Math.floor(Math.random() * 15).toString(16)
    }
  }).join('')
}

export function expandURL (locatable) {
  return new URL(locatable.toString(), document.baseURI)
}
