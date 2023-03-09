import {
  useEnvResolver as remoteUseEnvResolver,
  withEnvResolver as remoteWithEnvResolver,
  // @ts-ignore
} from 'remote-common/app/providers'

import type { UseEnvResolver, WithEnvResolver } from './env-resolver.model'

export const useEnvResolver: UseEnvResolver = remoteUseEnvResolver
export const withEnvResolver: WithEnvResolver<{}> = remoteWithEnvResolver
