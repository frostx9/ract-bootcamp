## React
React Library Main Work to Update Ui To Every Time when the State Change

## useState
import { useState } from 'react'

function APP() {
  const [count, setCount] = useState()
}


useState() => In The () We Set Default Value.... Like useState(0)

count => Default Value..  If set useState(0) then count = 0

setCount => Update The Value of count after any Changes


## Previous Value

 const [count, setCount] = useState(0)

 const addValue = () => {
    setCount(count  + 1)
    setCount(count  + 1)
    setCount(count  + 1)
    setCount(count  + 1)
    setCount(count  + 1)
  }

In Normal View When Call Add Value count should be 5 but it still show 1. Because useState send updated in *Batches*

To Fix This Problem We Use *Previous Value*


const [count, setCount] = useState(0)

const addValue = () => {
    setCount(prevValue => prevValue + 1)
    setCount(prevValue => prevValue + 1)
    setCount(prevValue => prevValue + 1)
    setCount(prevValue => prevValue + 1)
    setCount(prevValue => prevValue + 1)
  }
