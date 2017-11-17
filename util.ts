import * as path from 'path';
import { mkdir, rm } from 'shelljs';

//directory to place compiled source template to generate default / webpack package
const distPath = path.resolve('./dist');

/**
 * type of package we'd like to generate
 */
enum PackageType {
  default = 'default', //default electron using cjs `require`
  webpack = 'webpack', // electron using webpack bundled
  prebuilt = 'prebuilt'
}

/**
 * Delete intermidiate files
 */
const cleanUp = () => {
  console.log(`\nCleanup existing files`);
  [...Object.keys(PackageType), distPath].forEach((p) => rm('-rf', p));
  mkdir(distPath);
}

export {
  distPath,
  PackageType,
  cleanUp
}