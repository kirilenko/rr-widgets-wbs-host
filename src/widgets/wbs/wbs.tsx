import { FC } from 'react'

import { Header } from '@shared/ui'

import StyledWbs from './wbs.style'

const Wbs: FC = () => (
  <StyledWbs>
    <Header title="shared.ui.header in widgets.wbs" />
    <p>remote.widgets.wbs.host</p>
  </StyledWbs>
)

export default Wbs
