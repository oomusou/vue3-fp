import { curry } from 'ramda'

// _write :: (Ref a, a) -> a
let _write = (ref, val) => ref['value'] = val

// write :: Ref a -> a -> a
export let write = curry(_write)