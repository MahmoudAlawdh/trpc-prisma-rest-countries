import * as trpcNext from '@trpc/server/adapters/next';
import appRouter from '../../../server';

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
  });

export type AppRouter = typeof appRouter;