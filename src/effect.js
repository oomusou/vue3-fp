import { curry } from 'ramda'

let _effect = (prop, ref) => obj => (ref['value'] = obj[prop], obj)

export let effect = curry(_effect)

