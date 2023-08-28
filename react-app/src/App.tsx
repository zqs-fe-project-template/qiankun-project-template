import { router } from '@/router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (<div>
    hello
    <RouterProvider router={router} />
  </div>)
}

export default App
