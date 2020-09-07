export function setUrlDomain(inputURL: string) {
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  if (regexp.test(inputURL)) {
    return new URL(inputURL).hostname
  } else {
    return false
  }
}
