import { watch } from 'vue'

export let guard = ref => f => watch(ref, f)
