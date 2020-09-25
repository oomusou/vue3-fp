import { thunkify } from 'ramda'
import { unref } from 'vue'

// unwrap :: Ref a -> a
export let unwrap = thunkify(unref)