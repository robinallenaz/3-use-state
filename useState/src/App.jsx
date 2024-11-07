import { useState } from 'react'
import './App.css'


function App() {
  console.log(`I rendered`)
  // initiate counter at 0, setCounter let's us udpate the state var
  const [counter, setCounter] = useState(0)// returns a array/tuple;

  const [exArr, setExArr] = useState(["Hello", "World!"])

  // Function to add on to the state
  function addOne () {
    setCounter(counter + 1)
  }

  function addThree () {
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
    setCounter((counter) => counter + 1)
  }

  function handleAddToArray(){
    console.log("im running")
    // All this will NOT work
    // exArr.push("Yay!", "cool", "react!")
    // exArr[100] = "100"
    // const updateArr = exArr

    // this would not work, and the DOM will stay the same!
    // we are trying to update the exArr state variable with the excat same reference as the previous. React compares the two reference, sees that they're the same. Therefore does not re-render the component.
    // setExArr(updateArr)

    // Instead do this, you HAVE to create a new reference
    const updatedExArr = [...exArr] // this new array has a different reference value than the current state 

    updatedExArr.push("new value")

    setExArr(updatedExArr)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={addOne} >Click me to add 1</button>
      <button onClick={addThree} >Click me to add 3</button>
      <br />
      <h1 onClick={handleAddToArray}>{exArr.join(" ")}</h1>
    </>
  )
}

export default App