import express from 'express'

const routes = express.Router()

routes.get('/test', (_req, res) => {
  return res.json({ success: 'Hello World' })
})

export default routes
