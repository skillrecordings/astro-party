import {
  mergeRouters,
  router,
  skillLessonRouter,
} from 'skill-lesson'
import {abilities} from './abilities'
import {tipResourcesRouter} from './tip-resources'

export const appRouter = mergeRouters(
  router({
    abilities: abilities,
    tipResources: tipResourcesRouter,
  }),
  skillLessonRouter,
)

export type AppRouter = typeof appRouter
