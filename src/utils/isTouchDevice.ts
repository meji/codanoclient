export const is_touch_device = () => {
  return 'ontouchstart' in window.document.documentElement
}
