#!/usr/bin/env node

// import chalk from 'chalk';
// import yargs from 'yargs';
import ora from 'ora';

const main = async () => {
  // console.log(chalk.yellow('hello cli'));

  // const args = await yargs(process.argv.slice(2)).argv;

  const spinner = ora(`Running test`).start();

  setTimeout(() => {
    spinner.stop();
  }, 1e3);
};

main();
