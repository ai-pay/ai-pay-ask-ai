import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ModalDisplay } from './components/utils/modal'
import { ModelView } from './views/ModalView'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="h-screen w-screen">
      <ModalDisplay isShowing onClose={() => console.log("closed")}>
        <ModelView />
      </ModalDisplay>
    </div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
  </React.StrictMode>,
)

