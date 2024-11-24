import './App.css'
import router from './router/index.tsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
