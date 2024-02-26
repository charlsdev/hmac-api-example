import chalk from 'chalk'
import figlet from 'figlet'

console.log(
   chalk.greenBright.bold(
      figlet.textSync('Auth HMAC', {
         font: 'Slant',
         horizontalLayout: 'fitted',
         verticalLayout: 'default',
         whitespaceBreak: true,
      }),
   ),
)
console.log()
console.log(chalk.redBright.bold(' Author: ') + chalk.whiteBright.italic('charlsdev'))
console.log(chalk.redBright.bold(' Version: ') + chalk.whiteBright.italic('1.0.0'))
console.log(chalk.redBright.bold(' License: ') + chalk.whiteBright.italic('MIT'))
console.log(
   chalk.redBright.bold(' Description: ') +
      chalk.whiteBright.italic('Api example to hmac authentication with hono'),
)
console.log()
