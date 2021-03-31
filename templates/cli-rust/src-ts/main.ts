#!/usr/bin/env node

// import chalk from 'chalk';
import * as path from 'path';
import yargs from 'yargs';
import ora from 'ora';

import { RustBridge } from './RustBridge';

const main = async () => {
  // console.log(chalk.yellow('hello cli'));

  const args = yargs.options({
    instructions: { type: 'string', demandOption: true, alias: 'i' },
  }).argv;

  const rb = new RustBridge(
    path.resolve(__dirname, '../target/wasm32-unknown-unknown/debug/rust.wasm')
  );
  const rbExports = await rb.init();
  console.log(rbExports.square(4));

  const spinner = ora(`Running test on ${args['instructions']}`).start();

  setTimeout(() => {
    spinner.stop();
  }, 1e3);
};

main();
