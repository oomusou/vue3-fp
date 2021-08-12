import { watchEffect } from 'vue'
import { pipe } from 'ramda'

export let guardEffect = (...f) => () => watchEffect(pipe(...f))
