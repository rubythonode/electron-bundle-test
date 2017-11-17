//This script generates corresponding packages specified via `BUILD` environment variable
//For Electron-compile package, use separate script internally wraps electron-forge directly as recommended practice.
import { ls, rm, mkdir, pushd, exec, popd, cp, mv } from 'shelljs';
import * as path from 'path';
import * as prettyjson from 'prettyjson';
import * as fs from 'fs';
import 'tslib';
import { PackageType, distPath, cleanUp, pseudoMv } from './util';
import * as glob from 'glob';
import * as _ from 'lodash';
import { ignoreFunc } from './strip-package-module';

const packager = require('electron-packager');
const packageType: PackageType = process.env.BUILD as any;

if (!packageType ||
  !Object.keys(PackageType).includes(packageType) ||
  packageType === PackageType.prebuilt) {
  throw new Error(`Unexpected package type specified`);
}

/**
 * common option to be used for packaging
 */
const packageOption = {
  dir: './dist',
  asar: true,
  name: packageType,
  electronVersion: '1.8.2-beta.2',
  ignore: ignoreFunc
};

const packageJson = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));
/**
 * common package.json definition
 */
const packageDefinition = {
  name: packageType,
  main: 'main.js',
  description: packageType,
  repository: packageJson.repository,
  license: packageJson.license,
  dependencies: packageJson.dependencies,
  devDependencies: packageJson.devDependencies
}

console.log(`Building package for '${packageType}'`);

const prepareDependency = () => {
  console.log(`Installing dependencies:`);
  console.log(prettyjson.render(packageDefinition))

  pushd(distPath);
  exec('npm install');
  rm('./package-lock.json');
  popd();
}

const prepareSources = async () => {
  console.log(prettyjson.render(packageOption));
  cp('./template/index.html', './dist');

  //copy package.json
  console.log(`\nPreparing dependencies for dist directory`);
  require('fs').writeFileSync(path.join(distPath, 'package.json'), JSON.stringify(packageDefinition));

  switch (packageType) {
    case PackageType.default:
      //need to install node_modules
      prepareDependency();
      //for default package, simply run tsc then copy renderer html
      exec(`tsc --outdir ./dist ${glob.sync('./template/*.ts').join(' ')}`);
      break;
    case PackageType.webpack:
      //do not install node_modules, webpack picks up dependency
      exec(`npx webpack --config ./main.webpack.config.js`);
      exec(`npx webpack --config ./renderer.webpack.config.js`);
      break;
  }
}

(async () => {
  cleanUp(packageType);
  await prepareSources();

  const builtPackagePath = await packager(packageOption);
  pseudoMv(builtPackagePath[0], packageType);
})();