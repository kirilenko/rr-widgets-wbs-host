import compose from 'compose-function'

import { withEnvResolverProvider } from './env-resolver'

export const withProviders = compose(
  withEnvResolverProvider.bind({
    env: import.meta.env,
  }),
)

export { useEnvResolver, withEnvResolverProvider } from './env-resolver'
