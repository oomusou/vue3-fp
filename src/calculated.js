import { pipe } from 'ramda'
import { computed } from 'vue'

// calculated :: (...f a) => Computed a
export let calculated = (...f) => computed(pipe(...f))