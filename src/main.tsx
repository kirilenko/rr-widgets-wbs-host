import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import Wbs from './widgets/wbs'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Wbs />
  </StrictMode>,
)
