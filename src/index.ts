import '@/dev'
import { hmac } from '@/hmac'
import { format } from '@formkit/tempo'
import { serve } from '@hono/node-server'
import chalk from 'chalk'
import 'dotenv/config'
import { Hono } from 'hono'
import { logger } from 'hono/logger'

const port = process.env.APP_PORT || 3000
const app = new Hono()

app.use('*', logger())

app.get('/', c => c.json({ msg: 'Welcome to API with HonoJS... 🌍' }))

app.route('/api', hmac)

serve(
   {
      fetch: app.fetch.bind(app),
      port: Number(port),
   },
   () =>
      console.log(
         chalk.blackBright.bold(
            `[${format(new Date(), { date: 'short' })} - ${format(new Date(), { time: 'medium' })}]`,
         ) +
            chalk.yellowBright.bold(' - Servidor en el puerto ') +
            chalk.blueBright.italic(`${port}`),
      ),
)
