import './App.css'
import router from './router/index.tsx'
import { RouterProvider } from 'react-router-dom'
import './index.less'
function App() {
  return (
    <div className="app">
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </div>
  )
}

export default App
