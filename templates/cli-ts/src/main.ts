#!/usr/bin/env node

// import chalk from 'chalk';
import yargs from 'yargs';
import ora from 'ora';

const main = () => {
  // console.log(chalk.yellow('hello cli'));

  const args = yargs.options({
    instructions: { type: 'string', demandOption: true, alias: 'i' },
  }).argv;

  const spinner = ora(`Running test on ${args['instructions']}`).start();

  setTimeout(() => {
    spinner.stop();
  }, 1e3);
};

main();
