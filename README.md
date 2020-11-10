# sample-electron-app

Sample electron app with automatic releases building and autoupdates

## Building releases

Take a look at [release](.github/workflows/release.yml) action. It is based on [samuelmeuli/action-electron-builder](https://github.com/samuelmeuli/action-electron-builder) action.

For a success release building make sure you have tag `v*.*.*` for release commit.

Use command `yarn version` for bumping app's version:

```bash
yarn version --patch
yarn version --minor
yarn version --major
```
