import { FC } from 'react'
import { Global } from '@emotion/react'

import { useEnvResolver, withProviders } from '@app/providers'
import Wbs from '@widgets/wbs'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

const App: FC = () => {
  const { getEnv } = useEnvResolver()

  return (
    <>
      <Global styles={GlobalStyles} />
      <StyledApp>
        <Wbs />
      </StyledApp>
      <div style={{ display: 'none' }}>{getEnv('VITE_TIMESTAMP')}</div>
    </>
  )
}

export default withProviders(App)
