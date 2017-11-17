import { ls, rm, mkdir, pushd, exec, popd, cp, mv } from 'shelljs';
import { cleanUp, PackageType, pseudoMv } from './util';
import * as path from 'path';

cleanUp(PackageType.prebuilt);

//path to place teamplate source into electron-compile package
const srcPath = path.resolve(`./electron-compile-pkg/src`);
const templateSourcePath = path.resolve('./template');
const templateSources = path.join(templateSourcePath, '*.ts');
const templateHtml = path.join(templateSourcePath, 'index-prebuilt.html');

console.log(`Copying codes from template to electron-compile location`);
cp(templateSources, srcPath);
cp(templateHtml, path.join(srcPath, 'index.html'));
pushd(`./electron-compile-pkg`);
console.log(`Setup dependencies for package`);
exec('npm install');
console.log(`Start packaging`);
exec('npx electron-forge package'); //--asar
console.log(`Cleanup copied template source code`)
rm([path.join(srcPath, '*.ts'), path.join(srcPath, '*.html')]);
console.log(`Preparing package under 'prebuilt'`);
pseudoMv(path.join('./out', ls('./out')[0]), '../prebuilt');
rm('-rf', './out');
popd();