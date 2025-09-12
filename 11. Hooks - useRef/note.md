## useRef
The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.


## Use Case

1. Accessing a DOM element directly
let inputRef = useRef(null)

2. Persisting a value between renders
let count = useRef(0)