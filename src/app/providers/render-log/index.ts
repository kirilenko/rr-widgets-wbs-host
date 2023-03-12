import {
  withRenderLog as withRemoteRenderLog,
  withRenderLogProvider as withRemoteRenderLogProvider,
  // @ts-ignore
} from 'remote-common/app/providers'

import type { WithRenderLog, WithRenderLogProvider } from './render-log.model'

export const withRenderLog: WithRenderLog = withRemoteRenderLog
export const withRenderLogProvider: WithRenderLogProvider<{}> =
  withRemoteRenderLogProvider
