import { useState } from 'react'

import './App.css'
import { Characters } from './components/Characters'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container p-3 '>
      <Characters />
    </div>

  )
}

export default App
