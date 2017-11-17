import * as path from 'path';
import { mkdir, rm, cp } from 'shelljs';

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
const cleanUp = (type: PackageType) => {
  console.log(`\nCleanup existing files`);
  [type, distPath].forEach((p) => rm('-rf', p));
  mkdir(distPath);
}

/**
 * for some reason mv doesn't work across platform?
 *
 */
const pseudoMv = (source, dest) => {
  cp('-r', source, dest);
  rm('-rf', source);
}

export {
  distPath,
  PackageType,
  cleanUp,
  pseudoMv
}