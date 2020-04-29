export function isValidUrl(url: string, obligatory: boolean = true, ftp: boolean = false) {
  // Si no se especifica el paramatro "obligatory", interpretamos
  let pattern

  if (url === '' && !obligatory) return true

  if (ftp) {
    pattern = /^(http|https|ftp):\/\/[a-z0-9.-]+\.[a-z]{2,4}/gi
  } else {
    pattern = /^(http|https):\/\/[a-z0-9.-]+\.[a-z]{2,4}/gi
  }
  return !!url.match(pattern)
}
