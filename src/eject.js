import { curryN } from 'ramda'

export let eject = ref => curryN(2, ref)
