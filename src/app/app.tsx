import { FC } from 'react'
import { Global } from '@emotion/react'

import { withProviders, withRenderLog } from '@app/providers'
import { cnc, DivProps } from '@shared/lib'
import Wbs from '@widgets/wbs'

import StyledApp from './styles/app.style'
import GlobalStyles from './styles/global.style'

type Props = DivProps<{}>

const App: FC<Props> = (props) => (
  <>
    <Global styles={GlobalStyles} />
    <StyledApp {...props} className={cnc('App')}>
      <Wbs />
    </StyledApp>
  </>
)

export default withProviders(withRenderLog(App))
