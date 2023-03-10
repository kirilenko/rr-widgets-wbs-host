import { FC } from 'react'
import { Global } from '@emotion/react'

import { withProviders } from '@app/providers'
import Wbs from '@widgets/wbs'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

const App: FC = () => (
  <>
    <Global styles={GlobalStyles} />
    <StyledApp>
      <Wbs />
    </StyledApp>
  </>
)

export default withProviders(App)
