import { createHmac } from 'node:crypto'
import { Hono } from 'hono'

export const hmac = new Hono().basePath('/hmac')

hmac.post('/', async c => {
   const body = await c.req.json()
   const strBody = JSON.stringify(body)

   const signature = c.req.header('x-signature')
   const signatureCreated = createHmac('sha256', process.env.SECRET_PHRASE as string)
      .update(strBody)
      .digest('hex')

   if (signature !== signatureCreated) {
      return c.json({
         msg: 'HMAC Not Authenticated',
      })
   }

   return c.json({
      msg: 'HMAC Authenticated',
   })
})

hmac.post('/signature', async c => {
   const secret = process.env.SECRET_PHRASE
   const body = await c.req.json()

   const hmac = createHmac('sha256', secret as string)
      .update(JSON.stringify(body))
      .digest('hex')

   return c.json({
      msg: 'Signature created with exit... 🚀',
      hmac,
   })
})

hmac.use('*', async c => {
   return c.json({
      msg: 'Not Found',
   })
})
