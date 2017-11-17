const _ = require('lodash');
const ignoreRegexes = [
  /\.(cc|h|lib|pdb|obj|map|md|tlog|o|ipdb|iobj|ipch|ilk|exp|flow|pch|vcxproj|cpp|c|flow|\.d\.[jt]s)$/i,
  /\/(demo|tests?|examples?|docs|deps|__mocks__|.idea|__specs__)\//i,
  /\/node_modules\/@types/i,
  /\/node_modules\/\.bin/i,
  /\/node_modules\/cld\/(deps|src|test)/i,
  /\/node_modules\/cld\/build\/deps/i,
  /\/node_modules\/electron-packager/i,
  /\/node_modules\/electron-prebuilt/i,
  /\/node_modules\/electron-windows-store/i,
  /\/node_modules\/fbjs\/node_modules/i,
  /\/node_modules\/react-dom\/dist/i,
  /\/node_modules\/react-motion\/build/i,
  /\/node_modules\/electron-redux\/src/i,
  /\/node_modules\/redux-observable\/dist/i,
  /\/node_modules\/redux-persist\/src/i,
  /\/node_modules\/redux\/(dist|es|src)/i,
  /\/node_modules\/rxjs\/.*\.(ts|map)$/,
  /\/obj\.target/i
];

const ignoreFunc = (filePath) => {
  if (filePath.length < 1) return false;
  if (_.find(ignoreRegexes, (re) => filePath.match(re))) {
    //console.log(`Not copying ${filePath} during electron-packager move because path is being ignored`);
    return true;
  }

  return false;
};

module.exports = {
  ignoreFunc
}