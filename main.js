import { createSignal, createEffect } from "solid-js";

const [count, setCount] = createSignal(1)

console.log('count', count())

let b

createEffect(() => {
  b = count() + 10
  console.log('b', b);
})

setInterval(() => {
  setCount(count() + 1)
}, 1000)