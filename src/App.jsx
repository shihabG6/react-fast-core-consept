import { useState } from 'react'
import './App.css'
import Posts from './Components/Posts'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <h1>React Core Concepts</h1>
      <ol>
        <li>Components</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load data</li>
      </ol>
      <Posts></Posts>
    </>
  )
}

export default App
