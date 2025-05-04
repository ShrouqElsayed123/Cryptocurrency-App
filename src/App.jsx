import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout1 from './components/Layout/Layout1'
import HomePage from './components/HomePage'
import CryptoCurrencies from './components/CryptoCurrencies'
import Exchanges from './components/Exchanges'
import News from './components/News'
import { Provider } from 'react-redux'
import { store } from './app/store'

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Layout1 />, children: [
        { index: true, element: <HomePage /> },
        { path: "cryptocurrencies", element: <CryptoCurrencies /> },
        { path: "exchanges", element: <Exchanges /> },
        { path: "news", element: <News /> },
      ]
    },

  ])
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App
