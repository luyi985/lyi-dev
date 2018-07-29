#!/usr/bin/env node
const chalk = require('chalk');
const { spawn } = require('child_process')
const folderStruc = require('./folderStruc');
const packageInit = require('./packageInit');

folderStruc.excute();
packageInit.excute();
console.log(chalk.blue('- Installing Package'));
const npmInstall = spawn('npm', ['install']);

npmInstall.stdout.on('data', (data) => {
    console.log(chalk.green(`-- stdout: ${data}`));
  });
  
npmInstall.stderr.on('data', (data) => {
    console.log(chalk.yellow(`-- stderr: ${data}`));
});
  
npmInstall.on('close', (code) => {
    console.log(`Pacakage install completed with code ${code}`);
});