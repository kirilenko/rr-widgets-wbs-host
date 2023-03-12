import { FC } from 'react'

import { withRenderLog } from '@app/providers'
import { cnc, DivProps } from '@shared/lib'
import { DemoButton, DemoHeader } from '@shared/ui'

import StyledWbs from './wbs.style'

type Props = DivProps<{}>

const Wbs: FC<Props> = (props) => (
  <StyledWbs {...props} className={cnc('Wbs')}>
    <DemoHeader title="shared.ui.header in widgets.wbs" />
    <DemoButton title="shared.ui.button in widgets.wbs" />
    <p>remote widgets.wbs.host</p>
    <div style={{ display: 'none' }}>{`${
      import.meta.env.VITE_TIMESTAMP
    } / mode: ${import.meta.env.MODE}`}</div>
  </StyledWbs>
)

export default withRenderLog(Wbs)
