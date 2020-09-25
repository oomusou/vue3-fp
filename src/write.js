import { curry } from 'ramda'

let _effect = (o, x) => o['value'] = x
export let effect = curry(_effect)