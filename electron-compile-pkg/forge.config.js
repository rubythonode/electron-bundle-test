const { ignoreFunc } = require('../strip-package-module');

module.exports = {
  "make_targets": {
      "win32": [
          "squirrel"
      ],
      "darwin": [
          "zip"
      ],
      "linux": [
          "deb",
          "rpm"
      ]
  },
  "electronPackagerConfig": {
    ignore: ignoreFunc
  },
  "electronWinstallerConfig": {
      "name": "prebuilt"
  },
  "electronInstallerDebian": {},
  "electronInstallerRedhat": {},
  "github_repository": {
      "owner": "",
      "name": ""
  },
  "windowsStoreConfig": {
      "packageName": "",
      "name": "prebuilt"
  }
}