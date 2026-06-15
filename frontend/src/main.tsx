import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.scss'
import './styles/_varibales.scss'
import App from './App.tsx'
import store from './redux/store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
