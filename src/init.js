import { onMounted } from 'vue'
import { pipe, always } from 'ramda'

export let init = (...f) => () => onMounted(pipe(...f))


