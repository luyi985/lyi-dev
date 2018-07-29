const { srcPath, targetPath } = require('./setPath');
const fs = require('fs-extra');
const chalk = require('chalk');
const folderTemplate = [
    'client',
    'server',
    '__test__',
    '.babelrc',
    '.eslintrc.js',
    'js.prettierrc',
    'style.prettierrc',
    'webpack.config.js',
    'fileTransformer.js',
];

const excute = () => {
    console.log(chalk.blue(`- Copy folders`));
    folderTemplate.forEach(folder => {
        try {
            fs.copySync(`${srcPath}/${folder}`, `${targetPath}/${folder}`);
            console.log(chalk.green(`-- Success to copy ${folder}`));
        } catch (e) {
            console.log(chalk.red(`-- Fail to copy ${folder}`));
            console.log(e);
        }
    });
};

module.exports = {
    excute,
};
