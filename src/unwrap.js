import { pipe, always } from 'ramda'
import { unref } from 'vue'

export let unwrap = o => pipe(
  always(o),
  unref
)

