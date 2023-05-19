#!/usr/bin/env node

// import chalk from 'chalk';
import * as path from 'path';
// import yargs from 'yargs';
import ora from 'ora';
import { fileURLToPath } from 'url';
import { RustBridge } from './RustBridge.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const main = async () => {
  // console.log(chalk.yellow('hello cli'));
  // const args = await yargs(process.argv.slice(2)).argv;

  const rb = new RustBridge(
    path.resolve(__dirname, '../target/wasm32-unknown-unknown/debug/rust.wasm')
  );
  const rbExports = await rb.init();
  console.log(rbExports.square(4));

  const spinner = ora(`Running test`).start();

  setTimeout(() => {
    spinner.stop();
  }, 1e3);
};

main();
