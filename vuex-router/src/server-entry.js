import { app, router, store } from './main'

const isDev = process.env.NODE_ENV !== 'production'

export default function (context) {

  router.push(context.url)

  return new Promise((resolve, reject) => {
    context.initialState = store.state
    resolve(app)
  })
};
