import {
  useEnvResolver as useRemoteEnvResolver,
  withEnvResolverProvider as withRemoteEnvResolverProvider,
  // @ts-ignore
} from 'remote-common/app/providers'

import type {
  UseEnvResolver,
  WithEnvResolverProvider,
} from './env-resolver.model'

export const useEnvResolver: UseEnvResolver = useRemoteEnvResolver

export const withEnvResolverProvider: WithEnvResolverProvider<{}> =
  withRemoteEnvResolverProvider
