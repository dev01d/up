#!/usr/bin/env node
const ping = require('ping')
const chalk = require('chalk')

// Capture and spread CLI args after CMD
const [, , ...args] = process.argv

// Main function
const main = () => {
  ping.sys.probe(
    args,
    isAlive => {
      const results = isAlive
        ? `\n ${chalk.green(args)} is responding. \n`
        : `\n ${chalk.red(args)} is not responding. \n`
      console.log(results)
    },
    { extra: ['-i', '2'] }
  )
}

// Arg eval
args.length === 1
  ? main()
  : args.length === 0
    ? console.log(
        chalk.red(
          '\n Looks like you forgot the argument. \n\n Try: up "IP" or up "domain name"\n'
        )
      )
    : console.log(
        chalk.red(`\n Whoa there friend. One query at a time please. \n`)
      )
