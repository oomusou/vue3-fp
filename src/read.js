import { thunkify } from 'ramda'
import { unref } from 'vue'

// read :: Ref a -> a
export let read = thunkify(unref)