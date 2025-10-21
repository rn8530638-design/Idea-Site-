import { initTRPC } from '@trpc/server'
import _ from 'lodash'

const ideas = _.times(100, (i) => ({
  nick: `color-idea-nick-${i}`,
  name: `idea ${i}`,
  description: `Description ${i}`,
  text: _.times(100, (j) => `<p>Text paragrph ${j} of idea ${i}...</p>`).join(''),
}))

// const ideas = [
//   { nick: 'cool-idea-nick-1', name: 'Idea 1', description: 'Description of idea 1...' },
//   { nick: 'cool-idea-nick-2', name: 'Idea 2', description: 'Description of idea 2...' },
//   { nick: 'cool-idea-nick-3', name: 'Idea 3', description: 'Description of idea 3...' },
//   { nick: 'cool-idea-nick-4', name: 'Idea 4', description: 'Description of idea 4...' },
//   { nick: 'cool-idea-nick-5', name: 'Idea 5', description: 'Description of idea 5...' },
// ]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas: ideas.map((idea) => _.pick(idea, ["nick", "name", "description"])) }
  }),
})

export type TrpcRouter = typeof trpcRouter
