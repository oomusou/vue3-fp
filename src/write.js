import { curry } from 'ramda'

let _write = (ref, val) => ref['value'] = val

export let write = curry(_write)
