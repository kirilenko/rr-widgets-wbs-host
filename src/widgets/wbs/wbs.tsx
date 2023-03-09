import { FC } from 'react'

import { DemoButton, DemoHeader } from '@shared/ui'

import StyledWbs from './wbs.style'

const Wbs: FC = () => (
  <StyledWbs>
    <DemoHeader title="shared.ui.header in widgets.wbs" />
    <DemoButton title="shared.ui.button in widgets.wbs" />
    <p>remote widgets.wbs.host</p>
  </StyledWbs>
)

export default Wbs
