import { pipe } from 'ramda'
import { computed } from 'vue'

export let calculated = (...f) => computed(pipe(...f))
