import { curry } from 'ramda'

// effect :: (String, Ref a) -> Object -> Object
let _effect = (prop, ref) => obj => (ref['value'] = obj[prop], obj)

// effect :: String -> Ref a -> Object -> Object
export let effect = curry(_effect)

