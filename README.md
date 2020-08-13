## Functional Library for Vue 3

### Installation 

```
$ yarn add vue3-fp
```

### Usage

```
import { effect } from 'vue3-fp'

let onClick = pipe(
  always(counter),
  prop('value'),
  inc,
  effect(counter)
)
```