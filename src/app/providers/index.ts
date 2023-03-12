import compose from 'compose-function'

import { withEnvResolverProvider } from './env-resolver'
import { withRenderLogProvider } from './render-log'

export const withProviders = compose(
  withEnvResolverProvider.bind({
    env: import.meta.env,
  }),
  withRenderLogProvider.bind({
    env: import.meta.env,
  }),
)

export { useEnvResolver, withEnvResolverProvider } from './env-resolver'
export { withRenderLog } from './render-log'
