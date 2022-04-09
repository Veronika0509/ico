import React from 'react'

export const Hello = () => {
    const [counter, setCounter] = React.useState(10)

    return <button onClick={() => setCounter(counter+1)}>Hello {counter}</button>
}
