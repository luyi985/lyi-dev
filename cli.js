#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process')
const srcPath = path.join(__dirname, '../lyi-dev');
const targetPath = process.cwd()

const fileToCopy = ['.babelrc', '.eslintrc.js', 'js.prettierrc', 'style.prettierrc', 'webpack.config.js', 'fileTransformer.js'];

function copyFiles() {
    fileToCopy.forEach(file => {
        fs.copyFileSync(`${srcPath}/${file}`,`${targetPath}/${file}`);
    });
}

function updatePackageJson(error, stdout, stderr) {
    
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
    } catch(e) {
        console.error(e);
    }
}

function npmInit(callBack) {
    if (fs.existsSync(`${targetPath}/package.json`)) {
        callBack();
        return;
    }    
    exec('npm init -y', callBack);
}

copyFiles();
npmInit(updatePackageJson)
exec(`cp -rv ${srcPath}/src ${targetPath}/src`);
exec(`cp -rv ${srcPath}/__test__ ${targetPath}/__test__`);
console.log('-----Project has been setted up-------')
console.log('Installing Package...')
exec('npm i');