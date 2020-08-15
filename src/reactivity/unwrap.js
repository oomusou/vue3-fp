import { pipe, always, prop } from 'ramda'

export let join = o => pipe(
  always(o),
  prop('value')
)

