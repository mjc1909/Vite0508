import { useState } from 'react'
import './App.css'
import HelloWorld from '../components/helloWorld/HelloWorld'
import Greeting from '../components/helloName/HelloName'
import Counter from '../components/counter/Counter'
import Logger from '../components/logger/Logger'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter />
     <HelloWorld />
     <Greeting name="Marcus" />
     <Logger />
    </>
  )
}

export default App
