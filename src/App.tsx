import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './UserList';
import {Header} from './Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "min-h-screen bg-gray-50">
        {/* ページ全体の背景を薄いグレーに */}
        <Header />
        <main>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1 className = "text-red-500 font-bold">My First Deployed App!</h1>
          <UserList />
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <button onClick = {() => setCount(0)}>
              Reset
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </main> 
      </div>
    </>
  )
}

export default App



