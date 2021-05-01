import { thunkify } from 'ramda'
import { unref } from 'vue'

export let read = thunkify(unref)
