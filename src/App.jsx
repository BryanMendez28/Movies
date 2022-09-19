import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Movies from './Movies'
import MovieCard from './MovieCard'
import styles from "./App.module.css"

function App() {
  

  return (
    <div className="App">
      <header>
        <h1 className={styles.app}>Movies Bryan</h1>
      </header>
      <main>
      <Movies/>
      </main>
    </div>
  )
}

export default App
