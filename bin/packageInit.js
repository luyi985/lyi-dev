const { srcPath, targetPath } = require('./setPath');
const { exec } = require('child_process');
const fs = require('fs');
const chalk = require('chalk');

const npmInit = (callBack) => {
    if (fs.existsSync(`${targetPath}/package.json`)) {
        callBack();
        return;
    }
    console.log(chalk.green('- npm init -y'));
    exec('npm init -y', callBack);
}

const packageJsonUpdate = () => {
    try {
        const srcJson = require(`${srcPath}/package.json`);
        const targetJson = require(`${targetPath}/package.json`);

        if(!srcJson || !targetJson) {
            throw new Error('Can not find package.json')
        }

        const { 
            dependencies,
            main, 
            scripts, 
            devDependencies, 
            jest
        } = srcJson;

        const resultJson = Object.assign({}, targetJson, {dependencies, main, scripts, devDependencies, jest}, {'lint-staged': srcJson['lint-staged']});
        fs.writeFileSync(`${targetPath}/package.json`, JSON.stringify(resultJson));
        console.log(chalk.green('- new pacakage.json created'))
    } catch(e) {
        console.log(chalk.red(e));
    }
}

const excute = () => {
    npmInit(packageJsonUpdate);
}

module.exports = {
    excute
}